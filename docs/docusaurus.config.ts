import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MCP Playwright CDP',
  tagline: 'Browser automation with CDP support for Claude',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://lars-hagen.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/mcp-playwright-cdp/',

  // GitHub pages deployment config.
  organizationName: 'lars-hagen', // Your GitHub username
  projectName: 'mcp-playwright-cdp', // Your repo name

  onBrokenLinks: 'ignore',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/lars-hagen/mcp-playwright-cdp/tree/main/docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    navbar: {
      title: 'MCP Playwright CDP',
      logo: {
        alt: 'MCP Playwright CDP Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/lars-hagen/mcp-playwright-cdp',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/lars-hagen/mcp-playwright-cdp',
            }
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ExecuteAutomation, Ltd. CDP Support by Lars Hagen. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
