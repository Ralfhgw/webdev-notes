// @ts-check
const config = {
  title: 'Mini Docusaurus',
  favicon: 'img/favicon.ico',
  url: 'http://localhost',
  baseUrl: '/',
  organizationName: 'example',
  projectName: 'docusaurus-mini',
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