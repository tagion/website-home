---
title: Terminology
lang: en-US
sidebar: true
sidebarDepth: 0
editLink: true
---

# Terminology

This is a collection of terms used in this wiki. Some of them are specific to Tagion, and some are generally used in the cryptocurrency field.

## Tagion Terms

### Tagion Protocol

A set of rules that define communication between computers (e.g., [gossip protocol](#gossip-protocol)) in the [Tagion Network](#tagion-network), data storage (e.g., [DART](#dart)), [consensus](#consensus-protocol) on the order of events and voting, related to [governance](#governance).

### Tagion Network

A network of computers that run [Tagion Node Software](#tagion-node-software).

### Tagion Network Node

A single computer in the [Tagion Network](#tagion-network). This computer runs [Tagion Node Software](#tagion-node-software).

### Tagion Node Software

Software that follows [Tagion Protocol](#tagion-protocol), and enables a distributed storage of currency bills and execution of transaction scripts.

Parts of Tagion Node Software:

- [DART](#dart) (storage of bills)
- [Hashgraph](#hashgraph) (consensus on the order of transactions)
- [Gossip about Gossip](#gossip-about-gossip) (communication of transactions)

Tagion Node Software does not refer to any specific implementation. There can be any number of implementations, and all of them can work in one network as long as they follow an up-to-date version of [Tagion Protocol](#tagion-protocol).

### Tagion Prime

A first implementation of [Tagion Node Software](#tagion-node-software) by the core team.

### Tagion Contributor

A person who contributes to Tagion with at least one of the following:

- Improving the codebase (bug fixes, features);
- Creating assets for Tagion;
- Creating content about Tagion.

### Tagion User

A person who uses Tags ([Tagion currency](#tag), unit of exchange).

### Tag

A digital currency, TGS, enabled by the [Tagion Network](#tagion-network).

Tags are stored as records in the [DART](#dart).

The owner of the Tag is anonymous, not tied to any identity. Whoever has the private key - is the owner and can transfer Tag to someone else.

### DART

A lightweight distributed open-source database, made specifically for Tagion.

The name comes from the fact that the architecture can be visually explained using a dartboard (from a game of Darts) as a metaphor.

DART is an acronym for the phrase yet to be determined.

[DART architecture](/wiki/architecture/dart.html) is not disclosed yet, because it is a part of a to-be filed [patent](/wiki/development/open-source.html#patents-and-open-licenses).

### HBSON

Data format similar to [BSON](https://en.wikipedia.org/wiki/BSON), but hash-invariant. The order of keys is sorted before calculating a hash, so the same data always has the same hash.

## General Terms

### Blockchain

The technology underpinning cryptocurrency. Blockchain is a technology that can safely store transaction records on a [peer-to-peer](https://en.wikipedia.org/wiki/Peer-to-peer) network instead of storing them in a single location. Independent servers around the world, called nodes, make up the network that operates the Blockchain.

### Hashgraph

A distributed [consensus protocol](#consensus-protocol) and data structure that is fast, fair, and secure. This indirectly creates a trusted community, even when members do not necessarily trust each other.

Hashgraph is inexpensive, in the sense of avoiding [proof-of-work](https://en.wikipedia.org/wiki/Proof_of_work). Individuals and organizations running hashgraph nodes do not need to purchase expensive custom mining rigs.

### Gossip Protocol

A set of rules that defines how computers communicate information between each other directly, [peer-to-peer](https://en.wikipedia.org/wiki/Peer-to-peer).

### Gossip About Gossip

Extension of [Gossip Protocol](#gossip-protocol) that includes information needed to [Virtual Voting](#virtual-voting).

### Virtual Voting

An algorithm used in [Hasgraph](#hashgraph) protocol that defines how [Network Nodes](#network-node) agree on the order of transactions without transmitting actual voting information over the network.

Thanks to [Gossip about Gossip](#gossip-about-gossip), every [Network Node](#network-node) knows what other nodes know, thus can determine how they would cast their votes.

The fact that voting is virtual enables the network to reach consensus much faster.

### Consensus Protocol

A general agreement. Consensus protocol allows computers in the network to collectively reach an agreement on whether to accept or reject a transaction and how to order them.

### Byzantine Fault Tolerant

Byzantine Fault Tolerance (BFT) is the ability of a decentralized system to provide safety guarantees in the presence of faulty, or "Byzantine" members. Byzantine Fault Tolerant (BFT) consensus protocols are designed to function correctly even if some validator nodes — up to one-third of the network — are compromised or fail.

Read about [Byzantine fault on Wikipedia](https://en.wikipedia.org/wiki/Byzantine_fault).

### Cryptocurrency

A digital currency that uses cryptography to verify and secure financial transactions.

### Digital currency

A type of currency designed to be used in the digital form. A cryptocurrency is a digital currency.

### Decentralized Network

A decentralized network is a network where information is stored across a distributed [peer-to-peer](https://en.wikipedia.org/wiki/Peer-to-peer) network, instead of being stored in a single location.

### Fiat currency

Fiat currency is an object (like a paper bill or metal coin) that has been established as money, often by a government.

### Governance

Governance is an approach to decision making. 

In the field of cryptocurrencies, governance is usually decentralized, which means the [Network Nodes](#network-node) are voting for some change to be adopted by whole network.

### Merkle tree

Merkle tree is a type of authenticated data structure that allows for efficient verification of data integrity and updates. [Read more on Wikipedia](https://en.wikipedia.org/wiki/Merkle_tree).

### Open-Source

Open source is a term used for software that makes the original source code freely available so that it can be distributed and modified.

### Permissioned

On a permissioned network, an entity controls access to the network and oversees who can operate a node.

### Permissionless

On a permissionless network, anyone who meets certain technical requirements can access the network or operate a node.

### Smart Contracts

Code that is published on a distributed ledger, like [Tagion Node Software](#tagion-node-software). It defines a transaction that will be executed by all the computers in the network. 

For example, there is a smart contract that transfers [Tag](#tag) from one owner to another.

### API

Application programming interface (API) - in basic terms, APIs allow applications to communicate with one another.

### Scripting Engine

A program that compiles and runs another program, written in some programming language.

### Closed Network

A network of computers where the new members need to be authorized to join.

### Open Network

A network of computers where the new members can participate without any authorization. Nobody can technically limit participation in the network.
