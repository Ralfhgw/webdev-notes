// @ts-check
const config = {
  title: 'WebDev Training',
  favicon: 'img/favicon.ico',
  url: 'http://localhost',
  baseUrl: '/',
  organizationName: 'privat',
  projectName: 'webdev-notes',
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
      }
    ],
  ],
};
export default config;