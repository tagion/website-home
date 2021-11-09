# Parallelism


Transactions with independent bills can run in parallel, enabling scalability and performance. Independent bills mean that inputs and outputs of transactions are not the same bills. It can run in parallel because the overall design of the data, **DART** and the scripting engine makes it possible.
The scripting engine is an event-driven engine that executes functions parallel with inputs and produces outputs locally on each node. Inputs that must be used are read from the **DART**, and the outputs are stored in the **DART**. When the transaction is successfully completed, the inputs are deleted.
   
  
   The database is distributed; thus, nodes only maintain and keep a copy of the part of the database they subscribed to, see section [Distributed Database (DART)](https://github.com/tagion/content/blob/master/Distributed%20Database%20(DART).md). 
    Because transactions’ inputs and outputs are independent and each node only executes a part of the transactions, they can be performed in parallel and the database updated in parallel.
It is not the transaction instructions stored in the database, but the actual bills, which are used as inputs and outputs. Then all nodes do not need to execute all data to verify the integrity of the database as in typical blockchain structures. The consensus event and consensus data are thus mere an intermediate calculation, where the output is stored.
   