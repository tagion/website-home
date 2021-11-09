#  Trading flow using Lightning and Tagion Network


The Tagion network can order the bids/asks in a Byzantine Fault Tolerant (***BFT***) manner. This means that the network can come to a consensus on the order of transaction, and this solves the matching and prices discovery in a fair way and solver front-running the order-book in a decentralised manner.
The idea is one STN handles only one trading pair between TGS and ALC. By only using one pair, the matching and routing problem is reduced significantly compared to a full multicurrency-DEX with more than two currencies.
First of all, the price discovery is more straightforward, and the amount of data to process is much less if only one pair much be matched and discovered. The second advantage of the one-pair DEX is that sub-network only needs to handle one alien smart contract format.
##  Price discovery and matching


 The DEX can handle two types of orders, as shown in table 14 and table 13. The orders are sent to the TN, and at each epoch, the trade-order queue is sorted according to the hashgraph consensus ordering.

### Exchange order pairs

***ATO*** Order to buy TGS for ALC

***BTO*** Order to buy ALC for TGS


 The matching engine will maintain two sales lists of Ask Trade Orders (***ATO***) and Bid Trade Orders (***BTO***), those sales lists are sorted according to the exchange rate with the lowest exchange ratio at to top of the list. A detailed example can be found  in [DEX Trading Example](https://)

![](https://i.imgur.com/wqM4MFL.png)

*P* is the price in TGS
*Q* is the price in ACL

 
 The trade-order queue is maintained with the orders that are not executed. A new trade order queue is generated in each epoch and added at the end of the current trade-order queue. The matching runs the first in the trade-order queue, i.e., the oldest order is searched first for a match.
  The ATO and BTO orders in the trade-order queue are defined as buyers. A match is determined to be found when the buyer’s exchange rate is higher or equal to the seller’s exchange rate from the corresponding sales list. The price of the settlement will be set at the seller’s exchange rate.
  
![](https://i.imgur.com/gWuXOys.png)


To summarise, a buyer with an ATO order from the order queue matches a seller with a BTO order from the BTO-sales-list and vice versa. Then the size is calculated, and a trading contract with the corresponding pair is generated and stored in the TN.
If the ATO or the BTO has sold the full size, the order is removed from the lists. If an order includes a valid time period of ***t*** and the epoch consensus time is greater than this valid time period, the order is removed and not executed.

Table 13. ATO HiBON to buy TGS for ALC:



| Parameter | Description                    | Type   | Access |
| --------- | ------------------------------ | ------ | ------ |
| $type     | Set the contract type to ’ATO’ | string | ro     |
| P         | Price unit TGS                 | ulong  | ro     |
| Q         | Price unit ACL                 | ulong  | ro     |
| size      | Size of ACL                    | ulong  | ro     |
| lock      | Random Hash-lock key           | bin    | ro     |
| time          |Valid time period                              |     utc   |ro     |

Table 14. BTO HiBON to buy ALC for TGS:



| Parameter | Description                     | Unit   | Access |
| --------- | ------------------------------- | ------ | ------ |
| $type     | Sets the contract type to ’BTO’ | string | ro     |
| P         | Price unit TGS                  | ulong  | ro     |
| Q         | Price unit ACL                  | ulong  | ro     |
| size      | Size og TGS                     | ulong  | ro     |
| lock      | Random Hash-lock key            | bin    | ro     |
| time          |Valid time period                                |    utc    | ro       |

##  Exchange execution rules

Figure 9. Tagion Decentralised Exchange based on Lightning Network.

![](https://i.imgur.com/ovhTY8q.png)

In the following example, the execution flow of the DEX is described.

**Alice wants to trade TGS for ALC (ATO). It can be done as follows:**

![](https://i.imgur.com/emvOnN0.png)
![](https://i.imgur.com/u65o0qh.png)

**Carol wants to trade ALC for TGS (BTO). It can be done as follows:**

![](https://i.imgur.com/ySNs9r3.png

Figure 10. DEX transaction flow:
![](https://i.imgur.com/cRP8as4.png)

### Incentives and Penalty 


 If one or more of the 4 participants (Alice, Bob, Carol, and Dave) fail to execute the trade, the TN consensus will perform the flowing penalty rules.

**§1 Alice doesn’t claim the transaction**

***Incident***

• If Alice does not reveal ![](https://i.imgur.com/oSa6G1u.png)within the timeout limit.

***Action***


* After a timeout period less than the Alice HLTC time lock.
* The funds will be revoked to Carol.
* The trade is deleted.
* Bob keeps Alice’s stacked funds.
* If the price of Alice’s funds is less than Bob’s guaranteed funds. Bob gets some of his funds back, which corresponds to the current trading prices.
* The rest of Bob's funds is burned.
* If Alice reveals the ![](https://i.imgur.com/X5mtr1X.png) after the timeout, Alice losses her funds to Carol.

**§2 Bob doesn’t initial the routing**

***Incident***


• If Bob is offline or chooses not to find, establish a connection within the timeout period.

***Action***

* Bob loss his funds, and the trade bill is deleted.
* Carol’s funds are returned.
* Alice will get her funds back after the HTLC time lock runs  out.

***§3 Carol doesn’t claim the transaction***

***Incident***

• Carol does not reveal the ![](https://i.imgur.com/v15srYl.png) within the timeout limit.

***Action***

* Bob gets his funds back if he creates a contract that returns Alice’s funds with a time limit.
* Carol’s transaction stake is burned, and the rest of the funds is returned to Carol.
* The transactions bill is deleted.

**§4 Dave doesn’t accepts the routing**

***Incident***

• 
That is possible if Dave is offline or chooses not to establish a connection within the timeout period.

**Action**

* After the timeout Carol can reclaim the stack ![](https://i.imgur.com/ewV0yoL.png)and open a new channel with Eric.
* Dave’s stack ![](https://i.imgur.com/xh3PFZM.png)is burned.
* Carol can initial the trade by revealing ![](https://i.imgur.com/U4QIEY2.png).
* The transactions bill is deleted after execution.










