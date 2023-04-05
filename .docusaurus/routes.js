import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '9d2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '30d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '232'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'd0c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '426'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '167'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '230'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '345'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '8ca'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '212'),
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
        path: '/0x-limit-orders/docs/monitoring-0x-limit-orders',
        component: ComponentCreator('/0x-limit-orders/docs/monitoring-0x-limit-orders', '577'),
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
        path: '/0x-limit-orders/guides/limit-order-status',
        component: ComponentCreator('/0x-limit-orders/guides/limit-order-status', '603'),
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
        path: '/0x-orderbook-api/api-references/overview',
        component: ComponentCreator('/0x-orderbook-api/api-references/overview', '3b5'),
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
        path: '/0x-swap-api/api-references/overview',
        component: ComponentCreator('/0x-swap-api/api-references/overview', 'e70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-swap-api/guides/accessing-rfq-liquidity-on-0x-api',
        component: ComponentCreator('/0x-swap-api/guides/accessing-rfq-liquidity-on-0x-api', '238'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-swap-api/guides/how-to-build-a-token-swap-dapp-with-0x-api',
        component: ComponentCreator('/0x-swap-api/guides/how-to-build-a-token-swap-dapp-with-0x-api', '30c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-swap-api/guides/swap-tokens-with-0x-swap-api',
        component: ComponentCreator('/0x-swap-api/guides/swap-tokens-with-0x-swap-api', '99f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-swap-api/guides/troubleshooting-0x-api-swaps',
        component: ComponentCreator('/0x-swap-api/guides/troubleshooting-0x-api-swaps', '52b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/0x-swap-api/guides/use-0x-api-liquidity-in-your-smart-contracts',
        component: ComponentCreator('/0x-swap-api/guides/use-0x-api-liquidity-in-your-smart-contracts', '006'),
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
        path: '/category/developer-resources',
        component: ComponentCreator('/category/developer-resources', '292'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/developer-resources/0x-legal-guide',
        component: ComponentCreator('/developer-resources/0x-legal-guide', '544'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/developer-resources/audits',
        component: ComponentCreator('/developer-resources/audits', '374'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/developer-resources/bounties',
        component: ComponentCreator('/developer-resources/bounties', 'db5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/developer-resources/contract-addresses',
        component: ComponentCreator('/developer-resources/contract-addresses', '7fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/developer-resources/faqs-and-troubleshooting',
        component: ComponentCreator('/developer-resources/faqs-and-troubleshooting', '46e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/developer-resources/glossary',
        component: ComponentCreator('/developer-resources/glossary', '3c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/developer-resources/how-to-get-0x-and-matcha-data',
        component: ComponentCreator('/developer-resources/how-to-get-0x-and-matcha-data', 'c00'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/developer-resources/repositories',
        component: ComponentCreator('/developer-resources/repositories', '706'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/developer-resources/white-paper',
        component: ComponentCreator('/developer-resources/white-paper', '0b5'),
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
        path: '/introduction/0x-concept-videos',
        component: ComponentCreator('/introduction/0x-concept-videos', '123'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/introduction/community',
        component: ComponentCreator('/introduction/community', 'a54'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/introduction/guides',
        component: ComponentCreator('/introduction/guides', '93d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/introduction/introduction-to-0x',
        component: ComponentCreator('/introduction/introduction-to-0x', '1d8'),
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
        path: '/tx-relay-api/api-references/get-tx-relay-v1-swap-price',
        component: ComponentCreator('/tx-relay-api/api-references/get-tx-relay-v1-swap-price', '2bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tx-relay-api/api-references/get-tx-relay-v1-swap-quote',
        component: ComponentCreator('/tx-relay-api/api-references/get-tx-relay-v1-swap-quote', 'a0a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tx-relay-api/api-references/get-tx-relay-v1-swap-status-trade-hash.md',
        component: ComponentCreator('/tx-relay-api/api-references/get-tx-relay-v1-swap-status-trade-hash.md', '3be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tx-relay-api/api-references/get-tx-relay-v1-swap-submit',
        component: ComponentCreator('/tx-relay-api/api-references/get-tx-relay-v1-swap-submit', '100'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tx-relay-api/api-references/overview',
        component: ComponentCreator('/tx-relay-api/api-references/overview', '936'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tx-relay-api/development-status',
        component: ComponentCreator('/tx-relay-api/development-status', '034'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tx-relay-api/gasless-approvals-token-list',
        component: ComponentCreator('/tx-relay-api/gasless-approvals-token-list', 'f5a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tx-relay-api/introduction',
        component: ComponentCreator('/tx-relay-api/introduction', 'd79'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tx-relay-api/tx-relay-faq',
        component: ComponentCreator('/tx-relay-api/tx-relay-faq', 'da6'),
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
