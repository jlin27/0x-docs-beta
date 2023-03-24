import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'b21'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '00f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '560'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'f36'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '1ed'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '030'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'b45'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '06d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '4e6'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '915'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '347'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '461'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'c07'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'e00'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '4d5'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '263'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'c53'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '1e6'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'd48'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '50a'),
    routes: [
      {
        path: '/docs/0x-limit-orders/intro',
        component: ComponentCreator('/docs/0x-limit-orders/intro', 'd91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0x-swap-api/0x-swap-api-references/intro',
        component: ComponentCreator('/docs/0x-swap-api/0x-swap-api-references/intro', 'd25'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0x-swap-api/intro',
        component: ComponentCreator('/docs/0x-swap-api/intro', '3ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/0x-limit-orders',
        component: ComponentCreator('/docs/category/0x-limit-orders', '55c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/0x-swap-api',
        component: ComponentCreator('/docs/category/0x-swap-api', '281'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/0x-swap-api-references',
        component: ComponentCreator('/docs/category/0x-swap-api-references', 'da8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/developer-resources',
        component: ComponentCreator('/docs/category/developer-resources', '5ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/governance',
        component: ComponentCreator('/docs/category/governance', 'cf9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/market-makers',
        component: ComponentCreator('/docs/category/market-makers', '7a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/nft-support',
        component: ComponentCreator('/docs/category/nft-support', '850'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/protocol',
        component: ComponentCreator('/docs/category/protocol', '566'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/welcome',
        component: ComponentCreator('/docs/category/welcome', 'f39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/developer-resources/intro',
        component: ComponentCreator('/docs/developer-resources/intro', '229'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/governance/intro',
        component: ComponentCreator('/docs/governance/intro', '289'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/market-makers/intro',
        component: ComponentCreator('/docs/market-makers/intro', '1fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/nft-support/intro',
        component: ComponentCreator('/docs/nft-support/intro', '999'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/protocol/intro',
        component: ComponentCreator('/docs/protocol/intro', '23c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/welcome/intro',
        component: ComponentCreator('/docs/welcome/intro', '1e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '45a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
