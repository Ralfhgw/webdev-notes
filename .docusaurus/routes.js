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
    component: ComponentCreator('/docs', '3b5'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '5fa'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '9f0'),
            routes: [
              {
                path: '/docs/AI',
                component: ComponentCreator('/docs/AI', 'e5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/AIA-Club',
                component: ComponentCreator('/docs/AIA-Club', '925'),
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
                path: '/docs/Coding/html-css-backgrounds',
                component: ComponentCreator('/docs/Coding/html-css-backgrounds', 'e34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/html-css-bildformate',
                component: ComponentCreator('/docs/Coding/html-css-bildformate', '275'),
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
                path: '/docs/Coding/js-authentication',
                component: ComponentCreator('/docs/Coding/js-authentication', 'f8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-destructuring',
                component: ComponentCreator('/docs/Coding/js-destructuring', '5b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-ejs',
                component: ComponentCreator('/docs/Coding/js-ejs', '625'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-express',
                component: ComponentCreator('/docs/Coding/js-express', 'f4f'),
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
                path: '/docs/Coding/js-filesystem',
                component: ComponentCreator('/docs/Coding/js-filesystem', 'f45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-funktionen',
                component: ComponentCreator('/docs/Coding/js-funktionen', '2e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-grouping',
                component: ComponentCreator('/docs/Coding/js-grouping', 'c09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-kalkulationen',
                component: ComponentCreator('/docs/Coding/js-kalkulationen', '32a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-Klassen',
                component: ComponentCreator('/docs/Coding/js-Klassen', 'a85'),
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
                path: '/docs/Coding/js-React-Hooks',
                component: ComponentCreator('/docs/Coding/js-React-Hooks', '0fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-React-Native',
                component: ComponentCreator('/docs/Coding/js-React-Native', '3df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Coding/js-React-Router',
                component: ComponentCreator('/docs/Coding/js-React-Router', '2c8'),
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
                path: '/docs/Englisch-Training/EN_BE_3121X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3121X', 'ac8'),
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
                path: '/docs/Englisch-Training/EN_BE_3123X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3123X', '656'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3124X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3124X', '5f8'),
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
                path: '/docs/Englisch-Training/EN_BE_3212W',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3212W', '9f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3213X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3213X', '889'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3214X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3214X', '549'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3215X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3215X', 'd81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3301X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3301X', 'e38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3302X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3302X', '5b2'),
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
                path: '/docs/Englisch-Training/EN_BE_3714G',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3714G', '94d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3715S',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3715S', '83a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3801X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3801X', '3f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3802X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3802X', 'd49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3803X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3803X', '417'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3804X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3804X', '877'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3805X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3805X', '63f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3806X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3806X', 'a95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3807W',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3807W', '7cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3808R',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3808R', 'a0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3809S',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3809S', '0c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3810X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3810X', 'cbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3811X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3811X', 'ae8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3812X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3812X', '5e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3813X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3813X', '7dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3814X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3814X', '251'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3815X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3815X', '451'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3816X',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3816X', '4a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3824G',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3824G', '44a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Englisch-Training/EN_BE_3825G',
                component: ComponentCreator('/docs/Englisch-Training/EN_BE_3825G', '2c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Git',
                component: ComponentCreator('/docs/Git', '93d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Git/Git Actions',
                component: ComponentCreator('/docs/Git/Git Actions', 'ea3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Git/Git-Handling',
                component: ComponentCreator('/docs/Git/Git-Handling', '64a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Git/Kommandos',
                component: ComponentCreator('/docs/Git/Kommandos', '789'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Git/Zwei-Git-Accounts',
                component: ComponentCreator('/docs/Git/Zwei-Git-Accounts', '878'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Karriere',
                component: ComponentCreator('/docs/Karriere', '1f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/n8n-Automatisierung',
                component: ComponentCreator('/docs/n8n-Automatisierung', '544'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/PostgreSQL',
                component: ComponentCreator('/docs/PostgreSQL', '8e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/PostgreSQL/Commands',
                component: ComponentCreator('/docs/PostgreSQL/Commands', '6c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/PostgreSQL/ERD Modelling',
                component: ComponentCreator('/docs/PostgreSQL/ERD Modelling', 'cb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/PostgreSQL/fetch()-axos()',
                component: ComponentCreator('/docs/PostgreSQL/fetch()-axos()', 'd09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/PostgreSQL/Filehandling',
                component: ComponentCreator('/docs/PostgreSQL/Filehandling', '134'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/PostgreSQL/Filter',
                component: ComponentCreator('/docs/PostgreSQL/Filter', '225'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/PostgreSQL/Installation',
                component: ComponentCreator('/docs/PostgreSQL/Installation', 'ab7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/PostgreSQL/Mongodb',
                component: ComponentCreator('/docs/PostgreSQL/Mongodb', '39c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/PostgreSQL/ORM_Prisma',
                component: ComponentCreator('/docs/PostgreSQL/ORM_Prisma', '24c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/PostgreSQL/ORM_Prisma_memo',
                component: ComponentCreator('/docs/PostgreSQL/ORM_Prisma_memo', '4df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tools-Linux',
                component: ComponentCreator('/docs/Tools-Linux', 'd37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tools-Linux/tools-TeraTerm',
                component: ComponentCreator('/docs/Tools-Linux/tools-TeraTerm', '19e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tools-Linux/tools-VSCode-Emmet-Definition',
                component: ComponentCreator('/docs/Tools-Linux/tools-VSCode-Emmet-Definition', '389'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tools-Linux/tools-VSCode-Konfiguration',
                component: ComponentCreator('/docs/Tools-Linux/tools-VSCode-Konfiguration', 'c09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tools-Linux/Wireshark',
                component: ComponentCreator('/docs/Tools-Linux/Wireshark', 'a11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Web-Server',
                component: ComponentCreator('/docs/Web-Server', '8e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Web-Server/Account-webschere.de',
                component: ComponentCreator('/docs/Web-Server/Account-webschere.de', 'ec1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Web-Server/Browser-Server-Handling',
                component: ComponentCreator('/docs/Web-Server/Browser-Server-Handling', '482'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Web-Server/Docker',
                component: ComponentCreator('/docs/Web-Server/Docker', '40e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Web-Server/Google-DNS-Fehler',
                component: ComponentCreator('/docs/Web-Server/Google-DNS-Fehler', 'c4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Web-Server/next.js',
                component: ComponentCreator('/docs/Web-Server/next.js', '928'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Web-Server/node.js',
                component: ComponentCreator('/docs/Web-Server/node.js', 'eb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Web-Server/production-server',
                component: ComponentCreator('/docs/Web-Server/production-server', '59c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Web-Server/Server-Sicherheit',
                component: ComponentCreator('/docs/Web-Server/Server-Sicherheit', '9ae'),
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
