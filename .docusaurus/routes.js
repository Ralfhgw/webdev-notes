import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '399'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e74'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'a95'),
            routes: [
              {
                path: '/docs/AI',
                component: ComponentCreator('/docs/AI', 'e5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/AI/AI-Knowledge',
                component: ComponentCreator('/docs/AI/AI-Knowledge', 'c7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Browser',
                component: ComponentCreator('/docs/Browser', 'c56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Browser/Google dork cheatsheet',
                component: ComponentCreator('/docs/Browser/Google dork cheatsheet', 'f2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Browser/Webdev-Weblinks/',
                component: ComponentCreator('/docs/Browser/Webdev-Weblinks/', 'a43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Browser/Webdev-Weblinks/WebDev-Figma',
                component: ComponentCreator('/docs/Browser/Webdev-Weblinks/WebDev-Figma', '41c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Browser/Webdev-Weblinks/WebDev-React',
                component: ComponentCreator('/docs/Browser/Webdev-Weblinks/WebDev-React', '2fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Browser/Webdev-Weblinks/WebDev-Taining-Documentation',
                component: ComponentCreator('/docs/Browser/Webdev-Weblinks/WebDev-Taining-Documentation', '470'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding',
                component: ComponentCreator('/docs/Coding', 'e7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/node.js / npm',
                component: ComponentCreator('/docs/Coding/node.js / npm', 'fef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/node.js /test',
                component: ComponentCreator('/docs/Coding/node.js /test', '91e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/Tailwind/Installation',
                component: ComponentCreator('/docs/Coding/Tailwind/Installation', '856'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DCI-Abschlussprojekt',
                component: ComponentCreator('/docs/DCI-Abschlussprojekt', '5b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DCI-Abschlussprojekt/Asterisk <--> Telekom',
                component: ComponentCreator('/docs/DCI-Abschlussprojekt/Asterisk <--> Telekom', '392'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DCI-Abschlussprojekt/Konzept',
                component: ComponentCreator('/docs/DCI-Abschlussprojekt/Konzept', '93f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DCI-Abschlussprojekt/SST Solution_File',
                component: ComponentCreator('/docs/DCI-Abschlussprojekt/SST Solution_File', '389'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DCI-Abschlussprojekt/SST Solution_Realtime',
                component: ComponentCreator('/docs/DCI-Abschlussprojekt/SST Solution_Realtime', '9d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DCI-Abschlussprojekt/VirtualBox',
                component: ComponentCreator('/docs/DCI-Abschlussprojekt/VirtualBox', 'acb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React',
                component: ComponentCreator('/docs/React', 'e1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/Context Provider',
                component: ComponentCreator('/docs/React/Context Provider', 'ee0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/functions',
                component: ComponentCreator('/docs/React/functions', '5e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/React Router',
                component: ComponentCreator('/docs/React/React Router', '40b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Server',
                component: ComponentCreator('/docs/Server', '4be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Server/Account-webschere.de',
                component: ComponentCreator('/docs/Server/Account-webschere.de', '82e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Server/Google-DNS-Fehler',
                component: ComponentCreator('/docs/Server/Google-DNS-Fehler', '529'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Server/production-server',
                component: ComponentCreator('/docs/Server/production-server', '762'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/VS Code Editor',
                component: ComponentCreator('/docs/VS Code Editor', '825'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/VS Code Editor/Emmet Definition',
                component: ComponentCreator('/docs/VS Code Editor/Emmet Definition', 'ebc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/VS Code Editor/Shortcuts-Extensions',
                component: ComponentCreator('/docs/VS Code Editor/Shortcuts-Extensions', '520'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
