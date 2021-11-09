#  System Upgrade Governance

[![hackmd-github-sync-badge](https://hackmd.io/Q5zIGeiiSdK29JD5JzoNdg/badge)](https://hackmd.io/Q5zIGeiiSdK29JD5JzoNdg)


  Upgradability has been taken into consideration on two primary levels: Node Software, which concerns the actual base protocols for running a node, and Script Function Upgrades, which concerns the function scripts in the network. All scripts are stored in the DART, meaning it does not require an upgrade of the base protocols but just a change of script function state in the DART. Function scripts are node governance and economic governance algorithms.


##  Node Base Protocol Upgrade
 Upgrade of the node base protocols should be backward compatible with the previous version.
It means the software can run the current network version and the new one, but it does not mean the networks are compatible, which can be divided into two categories minor and core upgrades:

**Minor and bug-fixes upgrades** This upgrade does not change the database structure and core algorithms, meaning that it can run in the same network as the current. It requires 5/6 of the active nodes to approve the upgrade.

**Core and structural upgrades** Core and structural upgrades make complex changes, which can be core algorithms for cryptography or the structure of the database, which make the current network incompatible with the new one. It means that the nodes that approve the new network operate both the current and new network in parallel until the upgrade is approved. It requires the 5/6 majority of the active nodes to approve the upgrade and enforce the new network version.

**Script Function Upgrades** Script function upgrades are when a script in the database in the network is changed, created, or deleted. It does not require the installation of a new binary on the computer the node is running on. Before a new function is approved, 5/6 active nodes need to approve it.
