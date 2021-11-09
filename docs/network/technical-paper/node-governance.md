---
lang: en-US
editLink: true
sidebar: true
sidebarDepth: 2
---

# Node Governance

The purpose of Node Governance is to ensure that 2/3 of the nodes in the network are not evil actors. That is accomplished by a reputational scoring model and a proof-of-people protocol that is a social heuristic protocol. Both components are inspired by Charles Darwin’s evolutionary theory of how species best survive in a new environment with the two main elements: 1) most diversified paired genes and 2) caretaking of the offspring. These two elements are embedded in the scoring model and protocol.
**Defining a node** is done from democratic principles, where all can participate and where one person has one vote. These principles are translated into a permissionless system where one node has one vote and only controls one node. It would ensure the full distribution of nodes because centralisation is not possible. It is impossible to ensure 100% that one person can only control one node, but it is the aim. More, it is not required that the network is fully distributed to ensure the network is secure. The requirement is that it is distributed in a way where many actors control an insignificant amount of nodes avoiding centralisation of power like in other networks, where few nodes may have majority control.
One of the downsides of democracy is that all have the same voting power independent of contribution. Thus, the Tagion system has a scoring system that values loyalty that works through time but is still open and fair for all to participate. The social component in the proof of-people protocol ensures that one person only has one node and is a real person. The protocol also selects users randomly to become nodes ensuring even distribution and fairness.

## Reputational Scoring Model

The model consists of actors, variables, and the boundaries of the actors, including the transition over a limit.
The Actors in the Tagion Network are defined in table 2.

Table 2. The actors in the Tagion Network:

| Actor                     | Description                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------ |
| All Users                 | All the users of the system defined loosely as anyone who has used the system.                   |
| Offline Nodes ON          | Nodes not available for the network.                                                             |
| Offline Prospect Nodes OP | Prospect nodes not available for the network.                                                    |
| Prospect Nodes PN         | PN are a subset of T, which are users who have received a node coupon and want to become a node. |
| Nodes N                   | N are a subset of T, which are users who have become verified as nodes and are for the network.  |
| Active Nodes AN           | AN are a subset of N . AN operate and constitute the live Tagion network.                        |

The variables of the actors and scoring rules for the model are defined in table 3.

Table 3: Variables and scoring rules for the reputational scoring model:

| Variable name                           | Definition and scoring rule                                                                                                                                                                                                                                                                                               |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Birthdate                               | The date a prospect node becomes a node.                                                                                                                                                                                                                                                                                  |
| Gene                                    | A gene is unique for each node.                                                                                                                                                                                                                                                                                           |
| Gene score (Genediversification points) | Each time a node mates with another node, a score is calculated for them both based on how diverse their genes are compared to each other. They mate each time verification of a prospect node takes place, when an active node makes an epoch, see section 2, and when two nodes choose to mate and validate each other. |
| Node age                                | A measure of a node’s total available time for the network. Time as both a node and an active node. It increases both as a node and active node when available for the network.                                                                                                                                           |
| Active time                             | Time as an active node. It increases when a node is active.                                                                                                                                                                                                                                                               |
| Prospect score                          | The Prospect score variable is a measure of how much the prospect node has been available to the network. It increases when the prospect node is available and decreases when not.                                                                                                                                        |
| Contribution loyalty                    | A measure of how much the node has been active andstayed available. Non availability of a node decreases contribution loyalty; being an active node increases loyalty.                                                                                                                                                    |

The actors with their boundaries to each other and variables are illustrated in fig. 1, the
boundaries and transition over them are described below.

![](https://i.imgur.com/IzYkoj8.png)

Governance Model with actors, boundaries and variables in the Tagion system. The green triangle indicates an increase for the actor, the red triangle decreases, and the yellow increases after an action, i.e., a mating transaction.

The boundaries are labeled with numbers in fig. 1, which are defined as:

1. Any user can go from online to offline and vice versa. The network is open for all; it means anyone who has not yet used the system can also become a user.
2. Any user can become a node over time and must first become a prospect node. The transition is based on a random selection, a lottery, to help ensure a broad representation of users as nodes. When going from a user to a prospect node or node, in general, the user is no longer anonymous but a public servant with a public name record in the system section 4.1. See section Proof-of-People for the full protocol.
3. When prospect nodes have been socially verified and earned enough prospect score available for the network for a period of time, the prospect node becomes a node, i.e., born and receives a gene number and a birth date. See section 1.1.2 for the full protocol.
4. Nodes are chosen randomly within a given interval continue to be active nodes, and active nodes are chosen randomly to be inactive nodes. Nodes and active nodes are swapped back and forth continuously to make it impossible to predict which nodes are active in 10-minute intervals, enhancing security. A node is selected by an Unpredictable Deterministic (UDR) algorithm, where the probability to be chosen as an active node or to continue as an active node depends on four variables: Gene score (gs), active time (at), node age (no) and contribution loyalty (cl).

![](https://i.imgur.com/UQXtc8H.png)

5. A node can go from online to offline and vice versa; if offline, it is not possible to be an active node or to become an active node.
6. A prospect node can go from online to offline and vice versa.

## Proof-of-People

The Proof-of-People protocol is a heuristic protocol with a random and social component. Heuristic aims to secure the democratic principles of one person, one node, and an actual person behind a node. One person, one node cannot be accomplished, but the social component would approximate this. The social component makes managing more than one node difficult, and the scoring mechanism makes it less favourable. The approximation would ensure a highly distributed system combined with a random selection of new prospect nodes. It means no actor or a few actors would control the network when the number of nodes has a specific size, making it secure.
**The protocol for becoming a node is:**

1. A user creates or has a name record in the system, see section name Card Contract.
2. A user has a name record with an age of more than one month. The user makes a prospect node record transaction where a node-transaction fee is paid together with a staked amount. The prospect node record contains the user’s public key, has the stake attached, and is linked to the name record.
3. With an average of 10 minutes, a prospect node record is chosen randomly, burning the stake and giving a node coupon. Then the prospect node should send a proof of activity within seven days. The proof is simply a public key to a bill in the DART, which is created within the last seven days.
4. When the user has sent the proof, two random active nodes verify the proof and give a gene to the prospect by crossing their genes. The gene is added to the prospect node record, and both parents sign the prospect node record.
5. The rewarded node in the same epoch where the coupon was issued is the first to identify the prospect in a dialogue. If the rewarded node validates the prospect, they make a mating transaction, which both sign. Both nodes receive gene score points for this transaction, and the mating transaction is linked to the prospect node’s record. The gene score points are symbolised with the yellow triangle in fig. 1.
6. Two semi-determined identifications should be made by two of the next ten epoch rewarded nodes. The prospect engages with potential validators to get two mating transactions — the same mating transaction as in item 5.
7. Now, the node has received three identifications, which means it can start participating as a prospect node on the network, receiving prospect score points. When the node has reached a prospect score threshold, the step is completed.
8. A second semi-determined identification of the prospect is made with two nodes from the last ten epochs from the point the prospect score is reached — the same mating transaction as in item 5.
9. The last mating transaction creates a birth date in the prospect node record, making the prospect node a full node on the network.

**There are three main components to the protocol:**

1. The first selection of prospect nodes introduces a certain time-lag by having a name record with an age of 1 month. Having a stake amount and node transaction fee ensures small and zero transactions cannot increase the coupon's chances. The fee and stake ensure commitment as well.
2. The activity requirement within the last seven days creates a condition for the user to have activity in the network.
3. A social component forces new nodes to dialogue with other nodes creating relations and communities. It is a local or virtual identification and conversation with each other following the protocol. Both parties receive gene score points when mating raising the chance of rewards creating a direct economic incentive and indirectly by ensuring non-evil nodes in the system, ensuring the long-term sustainability and economic network worth of the system. Therefore, all nodes have a natural incentive to ensure that new nodes are real persons with honest intentions.

The social protocol's premise is that users engage in dialogue; it requires social responsibility and engagement. As long as this premise is true, the node governance components can be adjusted based on the experience with the test network, where a balance between the work and drag of being and becoming a node compared to the actual user adoption and distribution.
Besides the proof-of-people protocol, a continuous evaluation of nodes can be imaged. E.g., each month, all nodes need to engage in dialogue with three other nodes receiving gene score points. More, the future perspectives of sharding the network would allow the network to be more local, removing cultural and language barriers, fostering people to educate each other, and building a culture around the network.
