# Network Security
## Network attack surface


In the following, the probability of an evil attack on the network is estimated via a simple model.
  
 The network participants are given by the flowing parameters.
 
 ***M*** is the total number of nodes available for the network (Including active and passive nodes, not prospect nodes).
***N*** is the number of active nodes running the networks.
***E*** is the number of nodes controlled by the evil attacker.
![](https://i.imgur.com/YbEkHN8.png)is the number of evil nodes among the N active nodes.

  
  The attack scenario is divided into two categories. The first category prevents the network from reaching consensus. In the second category, the attacker can take over the network and decide which transactions are going to a block.
 
  
### First category:

If the evil attacker wants to prevent the networks from reaching consensus, the evil attacker needs more than 1/3 of the active nodes.
![](https://i.imgur.com/XtzS6Ot.png)

### Second category:

If the evil attacker wants to take over the network, the attacker needs more than 2/3 of the active nodes.

![](https://i.imgur.com/yjiF4qo.png)


The calculated scenario is based on all the N nodes being changed at every epoch. In the real network, this is not the case; only one node is swapped out and in at every 100 epochs. Thus the probability of an evil takeover is significantly lower than this calculation. The model is chosen because it is easy to express mathematically. The active nodes are selected randomly from ***M***, and the probability that the evil attacker controls the first selected node is: Definition of permutation formula:


![](https://i.imgur.com/VPdd5sZ.png)

Definition of combination formula:

![](https://i.imgur.com/Oap32V9.png)

The probability of an evil node is selected:

![](https://i.imgur.com/6AdEJab.png)

The probability of selecting an evil node after selected an evil node at the nth time:

![](https://i.imgur.com/MvqielM.png)

## The probability of constructing an evil network

In this section, the probability of constructing an evil network is calculated.

The network is randomly constructed by selecting ***N*** nodes out of ***M*** nodes where ***E*** nodes are evil.

A network is defined to be evil if the network contains ![](https://i.imgur.com/08Jsci9.png)or more evil nodes out of the ***N*** active nodes according to formula first and second category formula above.

The probability that![](https://i.imgur.com/XWcEcvD.png)nodes out of N nodes:

![](https://i.imgur.com/A6armFj.png)

If ***M*** ![](https://i.imgur.com/AZAx0Bb.png)![](https://i.imgur.com/urH8e2d.png) and ***E*** ![](https://i.imgur.com/hb7MYsj.png) ![](https://i.imgur.com/COVM5eE.png)the probability can be approximated to:

![](https://i.imgur.com/Y7fDaP7.png)

The probability that ![](https://i.imgur.com/ERx4CDQ.png)nodes or more:

![](https://i.imgur.com/5UCAjj2.png)

Example, if ***N*** = 100 and ***M*** = 1000 and the attacker has ***E*** nodes, the probability that the attacker can prevent the network from reaching consensus:

![](https://i.imgur.com/NynUN7r.png)

For an attacker to take over the network:

![](https://i.imgur.com/uEjtWw7.png)

If we have an epoch time of 10 seconds and the probability is![](https://i.imgur.com/r7kTHPU.png) then the evil attacker can take over the network every![](https://i.imgur.com/eBFaNNk.png) years or around ![](https://i.imgur.com/kPawNK2.png) the current age of the universe.


***Note:*** For a huge number of ***M*** and ***N***, the probability can be expressed as a logarithm formula to prevent numerical overflow. Combination expressed as a logarithm formula:

![](https://i.imgur.com/gzryfS1.png)

The probability expresses as a logarithm:

![](https://i.imgur.com/QuXjtQo.png)

If ***M*** ![](https://i.imgur.com/AZAx0Bb.png)![](https://i.imgur.com/urH8e2d.png) and ***E*** ![](https://i.imgur.com/hb7MYsj.png) ![](https://i.imgur.com/COVM5eE.png)the probability can be approximated to:

![](https://i.imgur.com/LcIbHtu.png)

## Security conclusion


By having a volume of, e.g., 1000 and 100 active nodes, which could be a possible amount for a network or shard, the probability is so low that it will probably never occur in practice. Thus, the actual security is that the nodes are decentralised. Therefore, the node governance protocol is the security mechanism because it regulates the uptake of nodes aiming for it to be democratic, meaning both decentralised and one physical person only has one node.



 


