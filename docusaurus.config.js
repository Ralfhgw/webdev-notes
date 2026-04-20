import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WebDev Training',
  favicon: 'img/favicon.ico',
  url: 'http://localhost',
  baseUrl: '/',
  organizationName: 'privat',
  projectName: 'webdev-notes',
  noIndex: true,
  presets: [
    [
      'classic',
      {
        docs: {
          /* routeBasePath: '/', */
          sidebarPath: require.resolve('./sidebars.js'),
        },
      },
    ],
  ],
};

export default config;