---
title: Node Governance
lang: en-US
sidebar: true
sidebarDepth: 0
editLink: true
---

# Node Governance

The Node governance layer is the security mechanism in the Tagion network. It
limits the chance and the rate at which bad actors can join the network and
ensures a fair distribution of rewards.

<img src="/figures/Nodes Figure.svg" alt="Node Governance Figure" class="wiki-image-figure"/>

Nodes in the Active Node Pool operate the network. Nodes are swapped in and
out of the Active Node Pool by an unpredictable random algorithm, making it
impossible to predict how a current or future Active Node Pool is made up.

## Proof-of-People

Tagion utilises what is dubbed the Proof-of-People protocol, a heuristic social
protocol based on random validation and social components, to achieve a
democratic principle of “one person – one node“ and “one person – one vote”. The
social component makes it difficult to operate more than one node, while the
scoring mechanism reduces the incentive of doing so even more.

Any user can apply to become a node, by following the seven main steps:

1. A user creates a name record in the system to become a public user.
2. When the name record is at least a month old the user makes a node
   transaction and pays a fee to become a node. The user then participates
   in the lottery for becoming a node. All participating users will eventually
   win the lottery.
3. When the user has won the lottery, the user proves to the network that
   activity has taken place during the past seven days. By doing this, the user
   also accepts to become a prospect node. The next step is for two current
   nodes in the system to mate and give the new user - now their offspring -
   a gene.
4. The prospect engages in a dialogue with three randomly chosen nodes.
   The three nodes need to socially validate that the prospect is an actual
   person.
5. The prospect nodes follow the network and earn node reward points until
   the minimum score is obtained.
6. The prospect engages in a dialogue with two randomly chosen nodes.
   They should all socially validate the prospect is an actual person.
7. The prospect is now a real node, is given a birth date and an updated gene
   string in the system and can become an active node.

Each step is designed with a specific function in mind.

The first to steps create an incentive for the user to become a node (public name
and recovery of the paid (stacked) fee). The one-month age requirement for the
name record introduces a time-lag in the system making it impossible to spin up a
lot of nodes overnight. The lottery makes it random in which order new nodes are
chosen again avoiding a person to spin up a large number of nodes in a short
period of time. This virtually eliminates [Sybil Attacks](https://en.wikipedia.org/wiki/Sybil_attack).

**Step 3** ensures that the user is an active participant on the network and not just
an inactive lottery ticket. Two nodes verify the node and gives the user a gene by
making a mating transaction.

**Step 4** is another security check that ensures the prospect node is a real person.
All nodes have a name record making it possible to contact each other and engage
in a dialogue either by video or chat.

**Step 5** is another time-lag, but also a test of commitment. At this stage the node
can follow the network and in practice operate the network.

**Step 6** is again a second social validation through dialogue.

In **step 7** the prospect has become a node and given a birth date and a gene in
the system.

## Reputational Scoring Model

The Reputational Scoring Model is based on Charles Darwin’s evolutionary theory
of how species best survive in new environments.
One of Darwin’s best-known statements, ‘[survival of the fittest](https://en.wikipedia.org/wiki/Darwinism)’, is that all species
of organisms arise and develop through the natural selection of small, inherited
variations that increase the individual's ability to compete, survive, and
reproduce.

Another important, but less famous aspect of Darwin’s studies is the ‘[survival of the kindest](https://www.psychologytoday.com/us/blog/born-be-good/200902/darwins-touch-survival-the-kindest)’. Darwin argued for "the greater strength of the social or maternal
instincts than that of any other instinct or motive." His reasoning was disarmingly
intuitive; in our hominid predecessors, communities of more sympathetic
individuals were more successful in raising healthier offspring to the age of viability
and reproduction -- the sine qua non of evolution.

Both gene-diversification and caretaking are the inspiration for the scoring model
variables described below.

A node in the system has multiple reputation scores that determine its chance to
earn rewards:

- The Gene Score improves when node mates with each other
  (validates), and by that perform a human-work aspect of running the
  node, which improves the genes. That is both gene-diversification
  and caretaking of the network, keeping it healthy, giving it a better
  node score and improving the likelihood of being chosen as an active
  node.
- Contribution Loyalty increases when the node operates the
  network and decreases, when not available.
- Active time increases when the node operates the network and
  decreases the chance of being an active node.
- Node age increases along with the node being available for the
  network and so does the chance of being swapped into the active
  node pool and receive rewards.

The active nodes earn the rewards in the system and the model controls who are
active nodes. The scores determine the probability of being swapped in and out
as an active node. Therefore, the model creates an incentive for being available
for the network and increase node age and improve the gene scores continuously.

The node governance, Proof-of-people and the reputational scoring model are the
primary governance mechanisms for securing the network. When combined, it
becomes very difficult to attempt a network take-over, as it would require a lot of
resources, patience and a lot of consideration towards how to ensure gene
diversity. 

E.g. an evil actor wants to take control of the network that consists of 10,000 nodes
and 100 active nodes.

In this case the probability for the 100 evil nodes to take over the network is in
practice zero, as most existing nodes would have higher availability scores now
and going forward and better gene-scores. The evil actor would in other words,
need to spin up just as many evil nodes as there are available nodes in the entire
network ... and ensure their scores outmatch that of all the other nodes. 

It would be close to impossible, as the proof-of-people protocol is invoked both
when becoming a node and for an on-going dialogue going forward. In the
beginning it can be argued that the lower numbers of nodes make it easier to
attempt a takeover, but as adoption occurs, it becomes very impossible.

The mathematical proof for the claim is detailed in the [Tagion Technical Paper](/tagiontechpaper.pdf). 