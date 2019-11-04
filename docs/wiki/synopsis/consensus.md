---
title: Hashgraph
lang: en-US
sidebar: true
sidebarDepth: 0
editLink: true
---

# Hashgraph

>Several experts describe Hashgraph as a continuation of where the idea of blockchain begins while some consider it as an alternative to it, a technology known as first generation and typified by severe speed, fairness, cost, and security constraints. Some academics maintain it is less technically constrained than blockchains proper...
>
> -- From [Wikipedia](https://en.wikipedia.org/wiki/Hashgraph)

## Volume of Transactions

Bitcoin processes 3-7 transactions per second. VISA does around 1,700 transactions per second on average (based on an average of 150 million transactions per day), and the network can handle peaks of up to 65.000 transactions per second. For everyday use of cryptocurrencies to happen, it is the properties of VISA that should be the aim, and not the properties of most of the current DLT systems.

Tagion uses hashgraph for consensus, which in the Tagion implementation, makes it possible to process more than 20.000 transactions per second per Shard. Tagion is architected to be able to scale to hundreds of Shards that operate equally fast in parallel.

## Speed of Transaction Validation

The fast validation time is reached by use of hashgraph for consensus and an efficient patent pending gossip mechanism. The hashgraph algorithm and the accompanying mathematical proof was discovered by [Leemon Baird](http://www.leemon.com/).

It solves the Byzantine Generals' Problem, a term that takes its name from an allegory developed to describe a condition, where actors must agree on a concerted strategy to avoid catastrophic system failure, whilst some of the actors are not trustworthy.
The algorithms makes sure that if more than two-thirds of the nodes in the network follows the same consensus rules, all will, in finite time, reach the same order of events – confirming and validating any action on the network such as a money transfer, money exchange, or data interactions.

The gossip mechanisms optimise data exchange between nodes to happen most efficiently. This mechanism is patented, and a perpetual license has been given to the Tagion project.

## Energy Consumption

In the world of cryptos it is well known that the most popular networks, such as Bitcoin and Ethereum are anything but energy conscious, as they lean against the [proof-of-work protocol](https://cacm.acm.org/magazines/2018/7/229045-why-cryptocurrencies-use-so-much-energy-and-what-to-do-about-it/abstract). Tagions proof-of-people protocol uses insignificant, close to zero, energy compared to proof-of-work.

The hashgraph consensus mechanism, [DART](/wiki/synopsis/data-storage.html), and the lean script executions allows Tagion to be operated on low powered commodity hardware, such Smartphones. In comparison, banks are settling transactions with other banks by use of multiple mainframe-based systems and proof-of-work based cryptosystems are demanding an ever-increasing share of the total power consumed world-wide.
