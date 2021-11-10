#  Gene Distance

Each node has a gene string, which is used to calculate the gene-score of the node. This node gene is represented as a binary string of bits.

![](https://i.imgur.com/7XVPpcD.png)

The gene distance between two nodes **A** and **B** is calculated as the number of counted ’**1**’ of the ***exclusive-or*** between the to bits vectors.

![](https://i.imgur.com/d7UiIVO.png)

The total gene score form node A to all active nodes can be calculated as:

![](https://i.imgur.com/s2RtmSi.png)


Where **M** is the number of active nodes in the network.
The gene of the active node is mutated for each epoch via a **UDR** random number. A random bit selection from the **N** bits is randomly set to ’**0**’ or ’**1**’.
Over time the gene score between the active nodes is reduced, reducing the score statistically compared to the none active nodes, thereby increasing the probability of non-active being swapped as active nodes.

