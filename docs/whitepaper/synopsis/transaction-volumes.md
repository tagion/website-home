---
title: Transaction Volumes
lang: en-US
sidebar: true
sidebarDepth: 0
editLink: false
shareButtons: true

image: /figures/png/transaction-volume.png
description: Volume is king. It is said that DLT’s will never be able to compete with conventional banking systems in the area of transaction volumes. It might have been true once, but not anymore.
---

# Transaction Volumes

_Volume is king. It is said that DLT’s will never be able to compete with conventional banking systems in the area of transaction volumes. It might have been true once, but not anymore._

<img data-src="/figures/transaction-volume.svg" loading="lazy"  alt="Transaction Volumes" class="wiki-image-figure lazy"/>

Bitcoin processes 3-7 transactions per second. VISA does around 1,700 transactions per second on average (based on an average of 150 million transactions per day)[^1], and the network can handle peaks of up to 65.000 transactions per second. For everyday use of cryptocurrencies to happen, it is the properties of VISA that should be the aim, and not the properties of most of the current DLT systems.  

Tagion uses hashgraph for consensus, which in the Tagion implementation, makes it possible to process more than 20.000 transactions per second[^2] per Shard. Tagion is architected to be able to scale to hundreds of Shards that operate equally fast in parallel. 

[^1]: [The Blockchain Scalability Problem & the Race for Visa-Like Transaction Speed](https://hackernoon.com/the-blockchain-scalability-problem-the-race-for-visa-like-transaction-speed-5cce48f9d44)
[^2]: [Pulling back the curtain on the Hedera Consensus Service](https://www.hedera.com/blog/pulling-back-the-curtain-on-the-hedera-consensus-service)