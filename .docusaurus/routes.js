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
    component: ComponentCreator('/', '196'),
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
        path: '/0x-swap-api/guides/accessing-rfq-liquidity-on-0x-api',
        component: ComponentCreator('/0x-swap-api/guides/accessing-rfq-liquidity-on-0x-api', '238'),
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
        path: '/category/0x-orderbook-api',
        component: ComponentCreator('/category/0x-orderbook-api', '02d'),
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
        path: '/category/docs-3',
        component: ComponentCreator('/category/docs-3', '8d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/docs-4',
        component: ComponentCreator('/category/docs-4', '5db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/exchange-proxy',
        component: ComponentCreator('/category/exchange-proxy', 'afd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/features',
        component: ComponentCreator('/category/features', 'dab'),
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
        path: '/category/guides-3',
        component: ComponentCreator('/category/guides-3', 'a56'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/guides-4',
        component: ComponentCreator('/category/guides-4', '1ec'),
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
        path: '/category/siging-orders',
        component: ComponentCreator('/category/siging-orders', '715'),
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
        path: '/governance/docs/apply-for-a-0xdao-grant-v2',
        component: ComponentCreator('/governance/docs/apply-for-a-0xdao-grant-v2', '2ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/governance/docs/community-treasury',
        component: ComponentCreator('/governance/docs/community-treasury', '053'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/governance/docs/governance-participants',
        component: ComponentCreator('/governance/docs/governance-participants', 'b57'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/governance/docs/introduction',
        component: ComponentCreator('/governance/docs/introduction', '690'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/governance/docs/types-of-votes',
        component: ComponentCreator('/governance/docs/types-of-votes', 'cca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/governance/guides/how-to-delegate-zrx',
        component: ComponentCreator('/governance/guides/how-to-delegate-zrx', '68b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/governance/guides/how-to-vote',
        component: ComponentCreator('/governance/guides/how-to-vote', '729'),
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
        path: '/nft-support/docs/introduction',
        component: ComponentCreator('/nft-support/docs/introduction', '770'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/nft-support/guides/cancelling-orders',
        component: ComponentCreator('/nft-support/guides/cancelling-orders', '48a'),
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
        path: '/nft-support/guides/fetching-nft-order-data',
        component: ComponentCreator('/nft-support/guides/fetching-nft-order-data', '761'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/nft-support/guides/filling-orders',
        component: ComponentCreator('/nft-support/guides/filling-orders', '02c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/nft-support/guides/signing-orders/overview',
        component: ComponentCreator('/nft-support/guides/signing-orders/overview', '083'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/nft-support/guides/signing-orders/royalties-and-fees',
        component: ComponentCreator('/nft-support/guides/signing-orders/royalties-and-fees', '290'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/protocol/docs/exchange-proxy/features/erc1155orders',
        component: ComponentCreator('/protocol/docs/exchange-proxy/features/erc1155orders', 'cd6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/protocol/docs/exchange-proxy/features/erc721orders',
        component: ComponentCreator('/protocol/docs/exchange-proxy/features/erc721orders', 'c31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/protocol/docs/exchange-proxy/features/nativeorders',
        component: ComponentCreator('/protocol/docs/exchange-proxy/features/nativeorders', 'abb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/protocol/docs/exchange-proxy/features/overview',
        component: ComponentCreator('/protocol/docs/exchange-proxy/features/overview', 'f4a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/protocol/docs/exchange-proxy/overview',
        component: ComponentCreator('/protocol/docs/exchange-proxy/overview', 'ff9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/protocol/docs/introduction',
        component: ComponentCreator('/protocol/docs/introduction', '0f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/protocol/docs/signatures',
        component: ComponentCreator('/protocol/docs/signatures', '374'),
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
