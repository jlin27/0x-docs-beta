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
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'd48'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e24'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '9a7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-limit-orders/docs/introduction',
        component: ComponentCreator('/0x-limit-orders/docs/introduction', '985'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-limit-orders/docs/limit-order-structure',
        component: ComponentCreator('/0x-limit-orders/docs/limit-order-structure', '7af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-limit-orders/docs/limit-order-structure copy',
        component: ComponentCreator('/0x-limit-orders/docs/limit-order-structure copy', '6de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-limit-orders/guides/cancel-a-limit-order',
        component: ComponentCreator('/0x-limit-orders/guides/cancel-a-limit-order', 'b9d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-limit-orders/guides/create-a-limit-order',
        component: ComponentCreator('/0x-limit-orders/guides/create-a-limit-order', '1a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-limit-orders/guides/fill-a-limit-order',
        component: ComponentCreator('/0x-limit-orders/guides/fill-a-limit-order', '1bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-limit-orders/guides/working-in-the-testnet',
        component: ComponentCreator('/0x-limit-orders/guides/working-in-the-testnet', 'cf3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-orderbook-api/api-references/get-orderbook-v1',
        component: ComponentCreator('/0x-orderbook-api/api-references/get-orderbook-v1', '071'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-orderbook-api/api-references/get-orderbook-v1-fee_recipients.md',
        component: ComponentCreator('/0x-orderbook-api/api-references/get-orderbook-v1-fee_recipients.md', '695'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-orderbook-api/api-references/get-orderbook-v1-order-orderhash',
        component: ComponentCreator('/0x-orderbook-api/api-references/get-orderbook-v1-order-orderhash', '3ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-orderbook-api/api-references/get-orderbook-v1-orders',
        component: ComponentCreator('/0x-orderbook-api/api-references/get-orderbook-v1-orders', '2ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-orderbook-api/api-references/intro',
        component: ComponentCreator('/0x-orderbook-api/api-references/intro', '49c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-orderbook-api/api-references/post-orderbook-v1-order',
        component: ComponentCreator('/0x-orderbook-api/api-references/post-orderbook-v1-order', '343'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-orderbook-api/api-references/post-orderbook-v1-order_config',
        component: ComponentCreator('/0x-orderbook-api/api-references/post-orderbook-v1-order_config', '092'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-orderbook-api/api-references/post-orderbook-v1-orders',
        component: ComponentCreator('/0x-orderbook-api/api-references/post-orderbook-v1-orders', '520'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-orderbook-api/api-references/websocket-api',
        component: ComponentCreator('/0x-orderbook-api/api-references/websocket-api', '1e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-orderbook-api/connection-limit',
        component: ComponentCreator('/0x-orderbook-api/connection-limit', '38c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-orderbook-api/introduction',
        component: ComponentCreator('/0x-orderbook-api/introduction', 'fa5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-orderbook-api/rate-limiting',
        component: ComponentCreator('/0x-orderbook-api/rate-limiting', '6c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-swap-api/advanced-topics/how-to-set-your-token-allowances',
        component: ComponentCreator('/0x-swap-api/advanced-topics/how-to-set-your-token-allowances', 'e71'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-swap-api/advanced-topics/price-impact-protection',
        component: ComponentCreator('/0x-swap-api/advanced-topics/price-impact-protection', 'e3e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-swap-api/advanced-topics/rate-limiting',
        component: ComponentCreator('/0x-swap-api/advanced-topics/rate-limiting', 'baf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-swap-api/advanced-topics/slippage-protection',
        component: ComponentCreator('/0x-swap-api/advanced-topics/slippage-protection', '02d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-swap-api/api-references/get-swap-v1-price',
        component: ComponentCreator('/0x-swap-api/api-references/get-swap-v1-price', '653'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-swap-api/api-references/get-swap-v1-quote',
        component: ComponentCreator('/0x-swap-api/api-references/get-swap-v1-quote', '56a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-swap-api/api-references/get-swap-v1-source',
        component: ComponentCreator('/0x-swap-api/api-references/get-swap-v1-source', '3d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-swap-api/api-references/intro',
        component: ComponentCreator('/0x-swap-api/api-references/intro', '81e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-swap-api/introduction',
        component: ComponentCreator('/0x-swap-api/introduction', '827'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/0x-orderbook-api',
        component: ComponentCreator('/category/0x-orderbook-api', '02d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/0x-swap-api',
        component: ComponentCreator('/category/0x-swap-api', '587'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/advanced-topics',
        component: ComponentCreator('/category/advanced-topics', '97e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/api-references',
        component: ComponentCreator('/category/api-references', '9ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/api-references-1',
        component: ComponentCreator('/category/api-references-1', '2a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/creating-orders',
        component: ComponentCreator('/category/creating-orders', '227'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/developer-resources',
        component: ComponentCreator('/category/developer-resources', '292'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/docs',
        component: ComponentCreator('/category/docs', 'e1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/docs-1',
        component: ComponentCreator('/category/docs-1', '83f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/docs-2',
        component: ComponentCreator('/category/docs-2', 'dc5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/governance',
        component: ComponentCreator('/category/governance', '934'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/guides',
        component: ComponentCreator('/category/guides', 'a79'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/guides-1',
        component: ComponentCreator('/category/guides-1', 'e86'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/guides-2',
        component: ComponentCreator('/category/guides-2', '0c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/introduction',
        component: ComponentCreator('/category/introduction', '69c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/limit-order-advanced-traders',
        component: ComponentCreator('/category/limit-order-advanced-traders', '88e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/market-makers',
        component: ComponentCreator('/category/market-makers', 'ad8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/nft-support',
        component: ComponentCreator('/category/nft-support', '605'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/protocol',
        component: ComponentCreator('/category/protocol', '97a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/tutorial---basics',
        component: ComponentCreator('/category/tutorial---basics', '72e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/tutorial---extras',
        component: ComponentCreator('/category/tutorial---extras', '3d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/developer-resources/intro',
        component: ComponentCreator('/developer-resources/intro', 'dba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/governance/intro',
        component: ComponentCreator('/governance/intro', '318'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/introduction/0x-cheat-sheet',
        component: ComponentCreator('/introduction/0x-cheat-sheet', 'c0b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/market-makers/docs/introduction',
        component: ComponentCreator('/market-makers/docs/introduction', 'ba5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/market-makers/docs/providing-amm-liquidity-to-0x-api',
        component: ComponentCreator('/market-makers/docs/providing-amm-liquidity-to-0x-api', 'c72'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/market-makers/docs/providing-rfq-liquidity-to-0x-api',
        component: ComponentCreator('/market-makers/docs/providing-rfq-liquidity-to-0x-api', '11a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/market-makers/docs/rfq-order-structure',
        component: ComponentCreator('/market-makers/docs/rfq-order-structure', '08f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/market-makers/guides/generating-0x-order-hashes',
        component: ComponentCreator('/market-makers/guides/generating-0x-order-hashes', 'e32'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/market-makers/guides/rfq-orders-code-examples-with-python',
        component: ComponentCreator('/market-makers/guides/rfq-orders-code-examples-with-python', '5b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/market-makers/guides/signing-0x-orders',
        component: ComponentCreator('/market-makers/guides/signing-0x-orders', 'd24'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/nft-support/docs/introduction',
        component: ComponentCreator('/nft-support/docs/introduction', '770'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/nft-support/guides/creating-orders/collection-offers',
        component: ComponentCreator('/nft-support/guides/creating-orders/collection-offers', 'f85'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/nft-support/guides/creating-orders/overview',
        component: ComponentCreator('/nft-support/guides/creating-orders/overview', 'e65'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/nft-support/guides/creating-orders/royalties-and-fees',
        component: ComponentCreator('/nft-support/guides/creating-orders/royalties-and-fees', '73e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/nft-support/guides/generating-0x-order-hashes',
        component: ComponentCreator('/nft-support/guides/generating-0x-order-hashes', 'b9b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/nft-support/intro',
        component: ComponentCreator('/nft-support/intro', '6a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/protocol/intro',
        component: ComponentCreator('/protocol/intro', '444'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/congratulations',
        component: ComponentCreator('/tutorial-basics/congratulations', '4b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/tutorial-basics/create-a-blog-post', '93c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/create-a-document',
        component: ComponentCreator('/tutorial-basics/create-a-document', '58e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/create-a-page',
        component: ComponentCreator('/tutorial-basics/create-a-page', 'e6a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/tutorial-basics/deploy-your-site', '317'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/markdown-features',
        component: ComponentCreator('/tutorial-basics/markdown-features', '04e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/tutorial-extras/manage-docs-versions', '975'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/translate-your-site',
        component: ComponentCreator('/tutorial-extras/translate-your-site', 'ac7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];