---
sidebar_label: 0x Cheat Sheet
sidebar_position: 2
description: A collection of commonly used addresses, endpoints, and values across 0x products.
---

# 0x Cheat Sheet

### 0x Protocol Version

We are currently on v4 of the 0x protocol ([github](https://github.com/0xProject/protocol) | [docs](https://github.com/0xProject/protocol/tree/development/docs)).

### 0x API Endpoints

* Ethereum (Mainnet): [https://api.0x.org/](https://api.0x.org/)
* Ethereum (Goerli): [https://goerli.api.0x.org/](https://goerli.api.0x.org/)  &#x20;
* Polygon: [https://polygon.api.0x.org/](https://polygon.api.0x.org/)
* Polygon (Mumbai): [https://mumbai.api.0x.org](https://polygon.api.0x.org/)/
* Binance Smart Chain: [https://bsc.api.0x.org/](https://bsc.api.0x.org/)
* Optimism: [https://optimism.api.0x.org/](https://optimism.api.0x.org/)
* Fantom: [https://fantom.api.0x.org/](https://fantom.api.0x.org/)
* Celo: [https://celo.api.0x.org/](https://celo.api.0x.org/)
* Avalanche: [https://avalanche.api.0x.org/](https://avalanche.api.0x.org/)
* Arbitrum: [https://arbitrum.api.0x.org/](https://arbitrum.api.0x.org/)

### Exchange Proxy Addresses

This is the primary contract for all interactions with the protocol. It is also the allowance-target/spender/operator for any ERC20, ERC721, and ERC1155 assets being traded.  For most networks the address is identical, but be aware that a small number (marked with a \*) are slightly different. The ABI can be found in the protocol repo's [IZeroEx.json](https://github.com/0xProject/protocol/blob/development/packages/contract-artifacts/artifacts/IZeroEx.json) file. All 0x contract addresses can be found in the protocol repo's [addresses.json](https://github.com/0xProject/protocol/blob/a99c9161007b5457d81ffe6d5a853a3d489ce30e/packages/contract-addresses/addresses.json) file.

* Ethereum (Mainnet): `0xdef1c0ded9bec7f1a1670819833240f027b25eff`
* Ethereum (Goerli): `0xf91bb752490473b8342a3e964e855b9f9a2a668e`\*
* Polygon: `0xdef1c0ded9bec7f1a1670819833240f027b25eff`
* Polygon (Mumbai): `0xf471d32cb40837bf24529fcf17418fc1a4807626`\*
* Binance Smart Chain: `0xdef1c0ded9bec7f1a1670819833240f027b25eff`
* Optimism: `0xdef1abe32c034e558cdd535791643c58a13acc10`\*
* Fantom: `0xdef189deaef76e379df891899eb5a00a94cbc250`\*
* Celo: `0xdef1c0ded9bec7f1a1670819833240f027b25eff`
* Avalanche: `0xdef1c0ded9bec7f1a1670819833240f027b25eff`
* Arbitrum: `0xdef1c0ded9bec7f1a1670819833240f027b25eff`

### Ancillary Contract Addresses

These contracts are used within the 0x ecosystem but are not intended for direct interaction with users except in rare circumstances. They are less likely to remain fixed (compared to the Exchange Proxy Address). The latest addresses can be found in the protocol repo's [addresses.json](https://github.com/0xProject/protocol/blob/development/packages/contract-addresses/addresses.json) file. A subset of commonly used addresses can be found in [contract-addresses.md](../developer-resources/contract-addresses.md "mention").


