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
    component: ComponentCreator('/docs', '009'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'a3d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e77'),
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
                path: '/docs/Coding',
                component: ComponentCreator('/docs/Coding', 'e7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/html-css-Backgrounds',
                component: ComponentCreator('/docs/Coding/html-css-Backgrounds', '985'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/html-css-Bildformate',
                component: ComponentCreator('/docs/Coding/html-css-Bildformate', '2f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/html-css-Boxenmodell',
                component: ComponentCreator('/docs/Coding/html-css-Boxenmodell', '493'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/html-css-CLSX',
                component: ComponentCreator('/docs/Coding/html-css-CLSX', 'b64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/html-css-Datenspeicherung',
                component: ComponentCreator('/docs/Coding/html-css-Datenspeicherung', 'a2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/html-css-DOM',
                component: ComponentCreator('/docs/Coding/html-css-DOM', '4fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/html-css-Fonts',
                component: ComponentCreator('/docs/Coding/html-css-Fonts', '5e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/html-css-Grid',
                component: ComponentCreator('/docs/Coding/html-css-Grid', '6cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/html-css-Reset',
                component: ComponentCreator('/docs/Coding/html-css-Reset', '53b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/html-css-Tailwind',
                component: ComponentCreator('/docs/Coding/html-css-Tailwind', 'a35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-Authentication',
                component: ComponentCreator('/docs/Coding/js-Authentication', '456'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-Destructuring',
                component: ComponentCreator('/docs/Coding/js-Destructuring', 'ad3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-EJS',
                component: ComponentCreator('/docs/Coding/js-EJS', 'dac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-Express',
                component: ComponentCreator('/docs/Coding/js-Express', 'abb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-Fehlerbehandlung',
                component: ComponentCreator('/docs/Coding/js-Fehlerbehandlung', '840'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-Funktionen',
                component: ComponentCreator('/docs/Coding/js-Funktionen', 'b12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-Grouping',
                component: ComponentCreator('/docs/Coding/js-Grouping', 'f9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-Loops',
                component: ComponentCreator('/docs/Coding/js-Loops', 'e80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-Methoden-Eigenschaften',
                component: ComponentCreator('/docs/Coding/js-Methoden-Eigenschaften', '217'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-React',
                component: ComponentCreator('/docs/Coding/js-React', 'ef7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-TypeScript',
                component: ComponentCreator('/docs/Coding/js-TypeScript', '4bf'),
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
                path: '/docs/Englisch-Training',
                component: ComponentCreator('/docs/Englisch-Training', '97b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3119G',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3119G', '45e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3120G',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3120G', '17b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3122X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3122X', 'fa5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3125X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3125X', '0fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3201X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3201X', '950'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3303X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3303X', '662'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3304X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3304X', '877'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3305X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3305X', '564'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3306X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3306X', '374'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3307X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3307X', '9f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3308X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3308X', 'cec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3309G',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3309G', 'f96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3310S',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3310S', '917'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3311X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3311X', '799'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3315G',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3315G', 'e68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3316X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3316X', 'da7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3317X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3317X', '7a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3318G',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3318G', '7a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3319G',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3319G', '7a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3320X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3320X', '363'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3401X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3401X', 'eae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3402X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3402X', 'c4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3403X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3403X', 'ced'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3404X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3404X', 'ef3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3405X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3405X', '2fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3406X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3406X', '62e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3407X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3407X', '508'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3408X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3408X', '01e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3409X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3409X', 'b4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3410S',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3410S', '9e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3411X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3411X', 'ab4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3412X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3412X', '245'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3413X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3413X', '8c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3414X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3414X', '60d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3415X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3415X', '6d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3416X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3416X', '007'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3417G',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3417G', '8e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3418X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3418X', '6c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3419G',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3419G', '8cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3420X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3420X', '042'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3501X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3501X', 'd3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3502X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3502X', 'de6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3503X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3503X', '30c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3504X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3504X', 'f41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3505X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3505X', '162'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3506X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3506X', 'b69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3507X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3507X', '4a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3508X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3508X', '4d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3509X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3509X', 'cc4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3510X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3510X', 'e79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3601X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3601X', 'c08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3602X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3602X', '616'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3603X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3603X', '2e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3604X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3604X', '5f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3605X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3605X', '84b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3606X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3606X', '077'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3607X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3607X', '326'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3608X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3608X', '1ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3609X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3609X', '77e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3610X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3610X', '6b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3611X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3611X', 'df4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3612G',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3612G', 'd90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3613G',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3613G', 'f12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3614G',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3614G', 'bf1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3615X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3615X', 'f34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3701X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3701X', 'fb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3702X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3702X', '62d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3703X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3703X', '76c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3704X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3704X', 'ca5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3706X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3706X', '3f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3708X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3708X', 'aac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3709S',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3709S', 'bda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3710S',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3710S', '366'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3713X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3713X', '6a4'),
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
                path: '/docs/Server/Curl',
                component: ComponentCreator('/docs/Server/Curl', 'e52'),
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
                path: '/docs/Server/node.js',
                component: ComponentCreator('/docs/Server/node.js', '3d9'),
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
                path: '/docs/Server/Server-Sicherheit',
                component: ComponentCreator('/docs/Server/Server-Sicherheit', 'f9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tools',
                component: ComponentCreator('/docs/Tools', '528'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tools/tools-TeraTerm',
                component: ComponentCreator('/docs/Tools/tools-TeraTerm', '308'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tools/tools-VSCode-Emmet-Definition',
                component: ComponentCreator('/docs/Tools/tools-VSCode-Emmet-Definition', '39a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tools/tools-VSCode-Konfiguration',
                component: ComponentCreator('/docs/Tools/tools-VSCode-Konfiguration', '000'),
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
