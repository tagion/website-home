# Hashgraph Consensus Mechanism


 The Tagion network is based around a Hashgraph consensus algorithm and mathematical proof discovered by Leemon Baird. This algorithm solves the Byzantine Generals’ Problem of
generating a consensus order list of actions between distributed computer nodes connected in a network. If more than 2/3 of the nodes follow the same consensus rules, all the nodes will reach the same order of events in infinite time. The network distributes the information via a gossip protocol, sending information about the data received from the other nodes in the network. All the nodes solving the Hashgraph algorithm will come to the same order of transactions. The figure below shows a Hashgraph of gossip information representing the information flow between network nodes. Infinite time all nodes in the network will be able to build the same Hashgraph of gossip information.

![](https://i.imgur.com/Av0LAvh.png)

Each vertical line represents a compute node and each circle an event. The line between the events represents the communication of the events between the nodes. The events coloured red define a witness that is used to divide the consensus into rounds. Each round decides a list of events to be collected. This list of events is called an epoch and must be sorted into the same order as all other nodes. The description of the Hashgraph algorithm is the following:

![](https://i.imgur.com/cZtRXVm.png)

## Consensus Ordering


In the Tagion implementation of the Hashgraph algorithm, an Event is only allowed to point to one or none “other parent,” which is called a “father-event,” as shown below. 

![](https://i.imgur.com/9ncRipt.png)


This strategy aids in solving the graph forking problem and simplifies the consensus ordering. The “self-parent” is defined as a “mother-event” in the Tagion implementation. An event must have a mother-event but doesn’t have to have a father-event.
Each event points to the previous event called mother-event, and some also point to another father-event. The mother-event is defined as the previous event from the same node. The father is an event sent via the gossip network from another node.

The order Ω is calculated as:
![](https://i.imgur.com/AjU6Lbi.png)



 The order Ω sorts the events in the epoch list. If the order of two events is equal, the hash h of the event is used to calculate the order. The flowing expression is used to order the events:
![](https://i.imgur.com/MuZ0kDM.png)


The parameter ![](https://i.imgur.com/Ho3uSLV.png)is ![](https://i.imgur.com/DvIMNxs.png)if event A is ordered before event B.
