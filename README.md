# MCP Playwright CDP
[![smithery badge](https://smithery.ai/badge/@lars-hagen/mcp-playwright-cdp)](https://smithery.ai/server/@lars-hagen/mcp-playwright-cdp)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/lars-hagen/mcp-playwright-cdp/blob/main/LICENSE)

A Model Context Protocol server that provides browser automation capabilities using Playwright with Chrome DevTools Protocol (CDP) support. This server enables LLMs to interact with web pages, take screenshots, and execute JavaScript in a real browser environment, with the ability to connect to existing Chrome instances via CDP.

## Maintenance status

This project is in maintenance mode. Focused fixes for security, compatibility, and documentation are welcome. It is not currently published to the npm registry. The latest source release is the `v0.2.10` Git tag from February 2025.

> This is a fork of [executeautomation/mcp-playwright](https://github.com/executeautomation/mcp-playwright) v0.2.7, enhanced with CDP support for connecting to running Chrome instances.

<a href="https://glama.ai/mcp/servers/fdvu5n58kv"><img width="380" height="200" src="https://glama.ai/mcp/servers/fdvu5n58kv/badge" alt="Playwright CDP MCP server" /></a>

## Key Features

- 🔗 Connect to existing Chrome instances via CDP
- 🌐 Full browser automation capabilities
- 📸 Screenshot capture of entire pages or specific elements
- 🖱️ Comprehensive web interactions (navigation, clicking, form filling)
- 📊 Console log monitoring
- 🔧 JavaScript execution in browser context
- 🌍 HTTP API testing support

## Installation

You can install the package using either npm or Smithery:

### Installing via Smithery
To install MCP Playwright CDP for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@lars-hagen/mcp-playwright-cdp):

```bash
npx -y @smithery/cli install @lars-hagen/mcp-playwright-cdp --client claude
```

### Manual Installation
Clone the repository, then build it with Node.js 20 or 22:
```bash
npm ci
npm run build
```

Use `npm install` only when updating dependencies.

## Configuration

Add this to your Claude Desktop configuration file:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "node",
      "args": ["/path/to/mcp-playwright/dist/index.js"]
    }
  }
}
```
Replace `/path/to/mcp-playwright` with your actual path to the repository.

## CDP Connection

This fork adds the ability to connect to an existing Chrome instance via CDP. To use this feature:

1. Launch Chrome with remote debugging enabled:
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
```

2. The server will automatically attempt to connect to the running Chrome instance first, before launching a new browser.

## Security

The `playwright_evaluate` tool intentionally executes JavaScript in the current browser page. It is not a sandbox. Use this server only with trusted MCP clients and pages. See [SECURITY.md](SECURITY.md) for vulnerability reporting.

## Credits

This project is a fork of [executeautomation/mcp-playwright](https://github.com/executeautomation/mcp-playwright), enhanced with CDP support for connecting to running Chrome instances.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
