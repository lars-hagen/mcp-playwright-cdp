import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';

const [command, ...args] = process.argv.slice(2);
assert(command, 'Usage: stdio-initialize.js <command> [args...]');

const server = spawn(command, args, { stdio: ['pipe', 'pipe', 'pipe'] });
let output = '';
let errorOutput = '';

server.stderr.on('data', (chunk) => {
  errorOutput += chunk;
});

const response = await new Promise((resolve, reject) => {
  const timeout = setTimeout(() => reject(new Error(`Timed out waiting for initialize response: ${errorOutput}`)), 10_000);

  server.once('error', reject);
  server.once('exit', (code) => reject(new Error(`Server exited before initialization with code ${code}: ${errorOutput}`)));
  server.stdout.on('data', (chunk) => {
    output += chunk;
    for (const line of output.split('\n')) {
      if (!line) continue;
      const message = JSON.parse(line);
      if (message.id === 1) {
        clearTimeout(timeout);
        resolve(message);
        return;
      }
    }
  });

  server.stdin.end(`${JSON.stringify({
    jsonrpc: '2.0',
    id: 1,
    method: 'initialize',
    params: {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'stdio-smoke-test', version: '1.0.0' },
    },
  })}\n`);
});

try {
  assert.equal(response.jsonrpc, '2.0');
  assert.equal(response.result.serverInfo.name, 'lars-hagen/mcp-playwright-cdp');
  assert.equal(response.result.serverInfo.version, '0.2.10');
  console.log('MCP stdio initialize test passed.');
} finally {
  server.kill();
}
