---
title: Efficient Use of Data
lang: en-US
sidebar: true
sidebarDepth: 0
editLink: false
shareButtons: true

image: /figures/circle/png/use-of-data.png
description: Most DLTs uses a decentralised immutable database for storage. The blockchain data structure is immutable meaning all data should be stored forever and cannot be deleted.
---

# Efficient Use of Data

_If you want to move fast, you pack light. In Tagion, a node does not keep a complete history of transactions, but only alive records._

<img data-src="/figures/circle/use-of-data.svg" loading="lazy"  alt="Use of Data" class="wiki-image-figure lazy"/>

Most DLTs uses a decentralised immutable database for storage. The blockchain data structure is immutable meaning all data should be stored forever and cannot be deleted.

This means that every network participant (usually referred to as miners or node owners) have a full copy of the database; processing, storing and exchanging huge amounts of data. The security in the blockchain lies in the whole chain, thus you cannot just delete old irrelevant data if you want to do a full validation, because then you cannot prove the data integrity with cryptography.

Tagion uses a distributed database for storage, meaning a node only stores a part of the data. DART (Distributed Archive of Random Transactions) gives away with immutability and only the output of a transaction is stored, while input and calculations are omitted, helping to reduce size. The innovation in terms of data utilisation is however that once a bill becomes irrelevant, it is deleted, rather than kept forever.

Tagion utilises a licensed patent pending validation mechanism to validate transactions stored in DART. A license has been given to the Tagion project. The mechanism transforms a problem that is burdened with an exponential workload in other systems into a linear workload, which saves vast amounts of CPU power.
