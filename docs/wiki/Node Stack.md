#  Node Stack

The node stack is implemented in the programming language D with some C libraries for crypto functions. It is structured, as shown in the figure below.

Table 12: Tagion Node stack:



| HRPC (HiBON) Dataformat for communication |
| ----------------------------------------- |
| NODE                                      |
| User API - TLS 1.2           P2P Network  |
| Scripting Engine                          |
| Consensus mechanism : Hashgraph           |
| Storage : Distributed Database DART       |
| Storage state : Blockchain                                          |


A Tagion Node is divided into units, as shown in fig. 6, and each unit handles a service function in the following manner:
  A smart contract is sent to the Transaction-service-unit, fetching the inputs from the **DART** unit and verifying their signatures. The **DART**-unit connects to other **DART**s via the P2P unit. The transaction unit forwards the smart contract, including the inputs, to the Coordinator-unit, and this unit adds it to an event that is gossiped to the network via the P2P unit.
When the Coordinator receives an event with a smart contract, it is executed via the ScriptingEngine-unit, and the result of outputs is verified.
When the Coordinator finds an epoch, this epoch is forwarded to the Transcript-service-unit that evaluates the correct order and requests the **DART**-unit to erase the inputs and add the newly generated outputs.

Figure 6. The Tagion Node service structure:

![](https://i.imgur.com/tlt4EhK.png)

Each of the services is running as independent tasks and communication between each other via commutation channels. The different services modules perform the service as described in the list below.


***Coordinator*** - This service manages the hashgraph-consensus and controls another related service for the node. The Coordinator generates and receives events and relays to the network. This service also generates the epoch and sends the information to the ScriptingEngine services.

***Transaction*** - This service receives the incoming transaction script, validate, verifies and fetches the data
from the **DART**,  and sends the information to the Coordinator.

***DART*** - Services to the Distributed database.


 ***P2P*** - This service handles the peer-to-peer communication protocol used to communicate between the nodes.

***ScriptingEngine*** - Handles the executions of the scripts.

***Transcript*** - Services the Epoch and orders the script execution.

***Logger*** - The service handles the information logging for the different services.

***Monitor*** - The Monitor service is used to monitor the activities locally.

***HeartBeat*** - This service is only used in test mode. This service enables the nodes to execute sequentially, simplifying network debugging.



