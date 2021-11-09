---
lang: en-US
editLink: true
sidebar: true
sidebarDepth: 2
---

# Business Model

The business model consists of two parts incentives and fee payments. The incentives are given to the nodes for their work and fees paid by the users for using the system.

## Money printing - incentives

New money is added to the system when an epoch has been completed, and the **DART** has reached a consensus. The newly printed money is rewarded to one of the active nodes if successfully executed the epoch.
The reward winning node is selected via a UDR Lottery seeded from the Bull’s eye hash of the **DART** where the epoch was generated.
The amount is calculated by an economic protocol controlled by the economic governance, see section
[Economic Governance](https://github.com/tagion/content/blob/master/Economic%20Governance.md).

## Money burning - payment

When a transaction is performed in the network, more fees are paid by the user initiating the transaction. The fees depend on storage, transaction amount, and script execution load. The fees paid to the network are burned; thus, the amount is taken out of the money supply. A storage fee is paid per byte of the total sum of bytes of all outputs stored in the **DART**.
A transaction fee is paid as a fraction of the total Tagion amount of the input of the transaction script.
The execution fee is calculated per script instructions, where each instruction is priced. If the total Tagion amount of the output transaction script is less than a specified limit, the whole
amount is burned, and the transaction is not valid. Fees for decentralised exchange are described in section **Decentralised Exchange using Lightning Network**.
