---
title: Executive Summary
lang: en-US
sidebar: true
sidebarDepth: 0
editLink: true

description: The world has too many financial (and physical) borders. Tagion was born to break down those borders and enable seamlessly peer-to-peer money transfers. Cheap, quick, fair, and fast for anyone anywhere.
---

# Executive Summary

## The Big Why

The world has too many financial (and physical) borders. Tagion was born to break down those borders and enable seamlessly peer-to-peer money transfers. Cheap, quick, fair, and fast for anyone anywhere.

## The Inquiring How

Current cryptocurrency systems have failed to gain wide-spread adoption, as several problems prevent these from doing so.

Tagion addresses technical issues such as:

### Network throughput

Tagion uses hashgraph[^1] for consensus, which in the Tagion implementation, makes it possible to process more than 20.000 transactions per second[^2] per shard. In comparison, VISA does around 1,700 transactions per second on average.

Tagion is architected to be able to scale to hundreds of Shards that operate equally fast in parallel.

### Speed of transactions

Transactions on Tagion are validated in two to three seconds, putting it on par with VISA in terms of validation speed.
The fast validation time is reached by the use of hashgraph for consensus and an efficient patent-pending gossip mechanism. The hashgraph algorithm and the accompanying mathematical proof was discovered by Leemon Baird.[^3]

The algorithms ensure that all nodes, infinite time, reach the same order of events - as long as more than two-thirds of the nodes in the network follow the same consensus rules. In doing so, the nodes confirm and validate any action on the network, such as a money transfer, money exchange, or data interactions.

The gossip mechanisms optimise data exchange between nodes to happen most efficiently.

### Storage and computational power

Most DLTs uses a decentralised immutable database for storage. The blockchain data structure is immutable, meaning all data should be stored forever.

Tagion uses a distributed database for storage, meaning a node only stores a part of the data. DART (Distributed Archive of Random Transactions) gives away with immutability, and only the output of a transaction is stored, while input and calculations are omitted, helping to reduce size. The innovation in terms of data utilisation is, however, that once a bill becomes irrelevant, it is deleted, rather than kept forever.

The mechanism transforms an exponential workload into a linear workload, which saves vast amounts of CPU power.

### Scalability

Tagion has ordering, enabling decentralised and fair price discovery and matching. Combined with the routing functionality of the Lightning Network, Tagion achieves decentralised exchange between all Lightning Network compatible cryptocurrencies (Tagions, Bitcoin, Ether, Litecoin and more).

Bids and asks are placed in the network, which gives full transparency and order depth for all users. The Tagion decentralised exchange, DEX, always trades alien currencies against Tagions (TGN), which helps to create high liquidity and thus heightens the matching probability. For example, a user exchanging BTC to LTC means that two exchanges are required. The first is BTC to TGN and the second TGN to LTC.

The exchange is supported by the guarantee model, where the part selling alien currency locks an amount in Tagions to their corresponding ask. If the is not fulfilled the guarantee amount is transferred to the counterpart. A strong incentive for the deal to be completed.

Combining Tagion DEX with DART provides Tagion with the speed and scalability needed to become the underlying network for all everyday financial services.

### Market liquidity

A better market liquidity results in efficient markets. With Tagions as intermediate currency, it is possible to exchange all tokenised currencies seamlessly. By pairing all alien currencies with Tagions the resulting reduction of currency pairs enables a simpler market with higher liquidity.

### Algorithmically controlled dynamic monetary policy

In general, to keep the market stable, a simple modelling of the use of money must be based on internal variables, such as the velocity of money (total velocity of Tagions), adoption level, supply of money, average transaction sizes and more.

The model can be used as a measure for demand on liquidity and be the basis for the addition or removal of money, to keep the market stable.
The system burns money after each transaction and all fees. Rewards are given to nodes, when consensus is reached. If the reward sums up to more than the burned fees, there is a money increase in the system, and the sum is lower than the burned fees, the opposite is true, i.e. a money decrease.

These features enable the world's first genuine decentralised exchange: Tagion DEX. With Tagion DEX it will be possible to seamlessly pay in all cryptos and FIAT's with a simple swipe.

## The Significant What

Tagion is a decentralised and permissionless banking network – run and owned by its users. Its genuinely fair and democratic governance model builds on the ideas and design principles of Nobel Memorial Prize winner in Economic Sciences, Elinor Ostrom. Tagion is self-sustainable and seen as a common resource that lets developers create new financial markets with a few clicks.

The elastic money supply and absence of a hard cap keep the value of the network tokens stable - and in time – Tagion will be a thrust less monetary system with an algorithmically controlled dynamic monetary supply. Given all developers, the possibility of creating a more sustainable economic world.

## The Practical Where

Tagion is a universal token protocol that acts as the backbone for almost any transaction-based service such as C2C cross-border payments and daily micro-transactions and seamlessly exchange between all tokenised currencies.  
Finally, Tagion is a vital aid for solving United Nations Sustainable Development Goal 10.c: by 2030, reduce to less than 3% the transaction costs of migrant remittances and eliminate remittance corridors with costs higher than 5%.

[^1]: [Pulling back the curtain on the Hedera Consensus Service](https://www.hedera.com/blog/pulling-back-the-curtain-on-the-hedera-consensus-service)
[^2]: [The Blockchain Scalability Problem & the Race for Visa-Like Transaction Speed](https://hackernoon.com/the-blockchain-scalability-problem-the-race-for-visa-like-transaction-speed-5cce48f9d44)
[^3]: [Leemon Baird's Home Page](http://www.leemon.com/)
