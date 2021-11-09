# Tagion Technical Knowledge Base

**Is Tagion open-source**

The team will open-source the TPN client once the TPN itself is launched and considered healthy. Open-sourcing at an earlier stage puts the Tagion Program at risk.

> From https://github.com/tagion/welcome

**What is Scripting Engine?**

The scripting engine’s language is called Funnel. It is based on a stack machine, a simple, functional language inspired by the programming language FORTH. The scripting engine executes at different run levels. The lowest level is the total Turing equivalent and can only make conditional forward jumps; it cannot run loops or functions. Several instructions executed limit the scripting engine, call stack depth, data stack depth, and memory. The limitation is done to prevent a script from running into infinite loops. The transaction script can use a library of the standard function stored in the DART (Distributed Archive of Random Transactions) and the fingerprint of the script stored in the Bull’s eye blockchain that is the current state of the script. 

**What is DART (Distributed Archive of Random Transactions)?**

DART (Distributed Archive of Random Transactions) is built to store and track transactions in the Tagion network. The database efficiently handles the removal and addition of transactions in a secure and distributed manner.

 **Why is DART better than Legacy, or other distributed databases?**
 
  In comparison to other distributed ledger technologies, DART is optimized for token transfers. It creates cryptographic bills, which makes it highly efficient for searching, reading, and storing. It also contains a fingerprint for the state of the database, another feature that is missing in classic distributed hash tables.
  
  **What is a Transaction Script?**
  
  When the network receives a transaction request, it is added in an epoch and executed by the scripting engine. A transaction request includes a transaction object which is a data package in HiBON format.

**What is HiBON Data format?**

All data exchanged and stored in the network is structured using a data format called Hashinvariant Binary Object Notation (HiBON), which is inspired by Binary JSON (BSON), but the two formats are not compatible. In HiBON the keys are sorted according to the ordering rules described below (in D-lang). By ordering the keys, the data is hash invariant for the same collection.
 
 **What is the HiBON object?**
 
 The HiBON object contains input bill numbers and the transaction script, including a list of digital signatures which sign the transaction script object. The signatures can be verified via the public keys represented in the input bills. 
 
 **What is DHT?**
 
 A Distributed Hash Table is a decentralized data store that looks up data based on key-value pairs. Distributed hash tables are decentralized, so all nodes form the collective system without any centralized coordination. They are generally fault-tolerant because data is replicated across multiple nodes.
 
**What Is DLT?**

 Distributed Ledger Technology (DLT) is a protocol that enables the secure functioning of a decentralized digital database. Distributed networks eliminate the need for a central authority to keep a check against manipulation.

DLT allows the storage of all information securely and accurately using cryptography. The same can be accessed using "keys" and cryptographic signatures. Once the information is stored, it becomes an immutable database and is governed by the rules of the network.
 
 **What is HTLC (Hash Time Locked Contract)?**
 
 A Hashed Timelock Contract (HTLC) is a smart contract used  to eliminate counterparty risk in cryptocurrency channels. It enables the implementation of time-bound transactions.

In practical terms, this means that recipients of a transaction have to acknowledge payment by generating cryptographic proof within a certain timeframe. Otherwise, the transaction does not take place.

**What is a shard?**

A database shard is a horizontal partition of data in a database or search engine. Each individual partition is referred to as a shard or database shard. Each shard is held on a separate file system to spread the load.

Tagion’s database, DART, supports sharding on a single DART where the DART is divided between nodes in the network. This means that only a fraction of the data is stored in a node’s local file system.

One of the examples is having a sub-DART for a video game so that in-game transactions don’t stall the main network - and ensures the data as it is only the owner of the data that can modify or erase it. This is not the case for a torrent file system.

Some data within a database remains present in all shards, but some appear only in a single shard. Each shard (or server) acts as the single source for this subset of data. A node always has a copy of the data to secure data in case a node is lost. It also improves the load speed because you can load data from several nodes at once. It also reduces distributed denial-of-service (DDoS).

**Does sharding work?**

Sharding is a method of splitting and storing a single logical dataset in multiple databases. By distributing the data among multiple machines, a cluster of database systems can store a larger dataset and handle additional requests. Sharding is necessary if a dataset is too large to be stored in a single database.

In many databases, sharding is a first-class concept, and the database knows how to store and retrieve data within a cluster. Tagion uses sharding to secure data so we can prove that we have the correct data. The optimized performance is a side effect.

**What other crypto projects are utilising sharding?**

Almost all modern databases, including Tagion’s DART, are natively sharded. Cassandra, HBase, HDFS, and MongoDB are popular distributed databases. Notable examples of non-sharded modern databases are SQLite, Redis (spec in progress), Memcached, and Zookeeper.

**What does DAG stand for?**


The Directed Acyclic Graph (DAG) DLT is a solution that offers the benefits of blockchain with better performance.

The idea of a Directed Acyclic Graph is by no means a new one. In mathematics, a DAG is a graph that travels in one direction without cycles connecting the other edges. This means that it is impossible to traverse the entire graph starting at one edge. The edges of the directed graph only go one way. The graph is a topological ordering that keeps each track of each node.

Imagine a collection of individual transactions where each transaction is linked to at least one other transaction in the following way:

* Directed - the links point in the same direction with earlier transactions linked to later transactions, and so on.
* Acyclic - loops are not possible. A transaction cannot loop back on itself after linking to another transaction.
* Graph - the mesh of connected transactions can be represented as nodes in a graph network, in which nodes are joined to each other by links.

**How is a DAG different from other distributed ledger technologies?**


* Practical differences between a DAG and a DLT typically include greater scalability and lower transaction fees for a DAG. They offer much higher validation speeds. At the same time, Bitcoin-style blockchain slows down as traffic increases.
* A blockchain is a long list of blocks, so to find the last transaction, you need to search backward through the whole block (this is time-consuming). To minimize this issue, a database searches for the unspent output from bitcoin transactions (UTXO) instead.
* There is no mining on DAGs and, therefore, no need to incentivise miners through mining reward systems and thus, no need to charge users high transaction fees. No mining also means no mining equipment, the sort that you’ve undoubtedly heard uses more energy than entire nations.
* With little or no transaction fees, DAGs can be used in situations where blockchain would not be feasible. A prime example is micro or nano-transactions between devices and sensors. DAGs, however, often contain a fee to reduce spam and to control the supply of money.

 **What is DApp, and is it possible to build a DApp on Tagion?**
* A decentralized application is a computer application that runs on a distributed computing system. DApps have been popularized by distributed ledger technologies such as the Ethereum Blockchain, where DApps are often referred to as smart contracts. 
* Tagion is optimized for token transfers and is therefore not equipped with a stateful machine. It is, however, possible to build smart contracts and run the transfer through Tagion.
* It is possible to use stateless smart contracts, and they have to be compliant with Tagion. Ethereum supports state complete smart contracts, which makes it simple to write a smart contract that could be used.
 
 
