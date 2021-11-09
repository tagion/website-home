---
lang: en-US
editLink: true
sidebar: true
sidebarDepth: 2
---

# network

**The following steps are executed in the network for a standard transaction:**

1. The transaction object is sent to one of the active nodes (an inactive node should relay the transaction object to an active node).
2. When a node receives a transaction object, its format and signatures of all the inputs are checked.
3. If the transaction object is valid, it is added to the payload of an event.
4. The event gossips to the network.
5. The payload is put into an epoch list in order.
6. The epoch list is processed in the epoch order.
7. All inputs to the transaction are collected from the **DART** database.
8. The transaction script is executed when all inputs are read from the **DART**.
9. The output of the transaction scripts gossips to the network.
10. When the network reaches consensus on all outputs of the transactions, the **DART** is updated.
11. The new Merkle root (Bull’s eye) of the **DART** is calculated, and the Bull’s eye gossips to the network.
12. When the majority of the nodes reach consensus on the Bull’s eye, it is added to the **DART** blockchain. The transaction is now approved.
