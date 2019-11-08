---
title: Hashgraph Consensus
lang: en-US
sidebar: true
sidebarDepth: 0
editLink: false
shareButtons: true

image: /figures/png/hashgraph.png
description: Exact (fair) ordering and parallel execution for scaling? Efficient resource utilization? Deterministic, i.e. finality on settlements fast? Now it is possible
---

# Hashgraph Consensus

_Exact (fair) ordering and parallel execution for scaling? Efficient resource utilization? Deterministic, i.e. finality on settlements fast? Now it is possible._

<img src="/figures/hashgraph.svg" alt="Hashgraph" class="wiki-image-figure"/>

Proof-of-work systems are probabilistic systems with no ordering, there is no accurate timestamp on each transaction. The miners decide on which transaction to put in a block and validate the transaction. It is usually decided by price but can also be chosen freely by the miner. It means, it is not necessarily the first to submit a transaction, which gets it approved first. It is also means it cannot function for ordering of bids and asks sorted by timestamps, do price-discovery and fair matching.

Another consequence is that everything is sequential, because it is a block in a chain a new block needs to be added, before new transactions can be worked on, where all are racing to solve the same problem. This is also related to the non-distributed data, which is a hindrance for parallel execution.

Tagion uses the Hashgraph algorithm to achieve fairness, because it has exact ordering of all events, transactions in the system. It is a deterministic system, meaning it has a finality, where the order is fully settled for all in the system. By having both a truly distributed data storage, which stores the outputs from transaction scripts and ordering it allows for parallel execution of transactions.
