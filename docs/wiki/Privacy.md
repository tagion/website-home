# Privacy


The current banking system achieves a level of privacy by keeping key information hidden from the public. Under this regime, all identities are known by the trusted third party, i.e., the bank.
   In the Tagion system, all transactions and bills are public, but physical identities are separated from transactions and bills. The system has full transparency regarding how many bills exist. A public key is bound to a bill and not an account, and the private key is for signing and spending the bill.
   
 Figure 7. Private and Public domains:
 
 ![](https://i.imgur.com/4jVRmvB.png)


Tagion bills are not linked in a chain because each time a bill is spent, a transaction is recorded in the database, deleting the old bill and creating a new one. However, a full trace of the network will reveal the inputs and outputs of transactions, thus linking the bills. Over time the bills split and re-combine as they become part of multiple in and out transactions. Therefore, it is not feasible to search back through the linking of bills for a pattern because it is not a 1:1 trace of bills and would cause an NP (non-polynomial) problem, which cannot be solved in finite time.

Figure 8. A transaction is represented as a hexagon with a flame, the small-bank-note with at represent bills:

![](https://i.imgur.com/36zVI0R.png)

   
   A user can determine if the same public key should be the owner on all his/her bills or a different, derived public key. They can hold a different public key for each owned bill, and these keys may not correlate with each other. By using a different public key for each node, a user can make transactions in full privacy, i.e., anonymously.
   A node is a public servant and therefore needs to reveal public information. A node in the Tagion system needs to use a fixed public key to ensure the governance of the node. The public key is the identifier for the node that can be perceived as an account, and it is the account for receiving rewards.


