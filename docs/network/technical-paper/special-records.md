---
lang: en-US
editLink: true
sidebar: true
sidebarDepth: 2
---

# Special Records

The archives stored in the DART using the hash-fingerprint as an index-pointer like in Distribute Hash Tabel (DHT) (See section Distributed Database ([DART](<https://github.com/tagion/content/blob/master/Distributed%20Database%20(DART).md>))[]. The hash of an archive is calculated in two ways as follows if the archive does not contain ![](https://i.imgur.com/8WPD2OO.png)the hash is calculated from the binary data of the HiBON archive, and if the ![](https://i.imgur.com/NdP55ws.png)exists this type of archive is call Parameter Indexed Archive (PIA). For a PIA the hash-pointer is calculated for the content of the ![](https://i.imgur.com/1Hq64OY.png).
Parameter starting with a dollar sign is reserved for use as system parameters, like ![](https://i.imgur.com/K6MIp2H.png) and should only be used for as such, or else the system will reject it as an error. Especially the ![](https://i.imgur.com/ULXt63w.png) is used to set the type of an HiBON object. An PIA-archive must contain a ![](https://i.imgur.com/thSDCFE.png) parameter.

Some of the parameter in those special archive has restricted access. The access `ro` means that this parameter is set on creating archive and can not be changed. The `rc` access means that this parameter is controlled and updated by the network and can only be read.

## Name card contract

A Network Name Card (***NN*C**) is a record that is composed of two archives Name Card Label (**_NCL_**) and Name Card Record (**_NCR_**); both of the archives are stored in the DART. The NCL label card sets the NNC name, and the NCR record stores the data related to the name card (see table 5). The two archives are always updated in pairs in the network.
The hash-pointer of an NCL is calculated for the name parameter and not for the archives in itself. The NCL can and must only contain the parameter as shown in table 4.

When an NNC is updated, the NCR is updated, the _previous_ hash-pointer is set to the previous NCR and the _index_ is increased by one. The _record_ parameter in NCL is set to the
hash-pointer of NCR and _sign_ is set to the signature of the record.
The _index_ of the first NCR is set to 0, and the _previous_ parameter is to hash value of _pubkey_ of the NCL archive.
The _lang_ sets the type of restricted letters and symbols which is allowed to be used in the
NNC name.

Table 4: NCL Network Name Card:

| Parameter | Description                     | Type   | Access |
| --------- | ------------------------------- | ------ | ------ |
| \$type    | Set contract type to ’NCL’      | string | ro     |
| #name     | Name of the name-card           | string | ro     |
| lang      | Language letter code            | string | ro     |
| time      | Creation date                   | utc    | ro     |
| pubkey    | Public key                      | bin    | ro     |
| sign      | Signature of the record         | bin    | rc     |
| record    | Hash pointer to the NCR archive | #      | rc     |

Table 5: NCR Network Name Record:

| Parameter | Description                      | Type   | Access |
| --------- | -------------------------------- | ------ | ------ |
| \$type    | Sets the contract type to ’NCR’  | string | ro     |
| name      | Hash value of the NCR.name       | #      | ro     |
| previous  | Hash pointer to the previous NCR | #      | rc     |
| index     | Index number                     | unit   | rc     |
| node      | Optional node record             | #      | rc     |
| ...       | ...                              |        | ...    |

## Node contract

Network Node Record (NNR) is used to store the node data of the record.

Table 6: NNR Network Node Record:

| Parameter | Description                     | Type   | Access |
| --------- | ------------------------------- | ------ | ------ |
| \$type    | Set contract type to ’NNR’      | string | ro     |
| #node     | Public key for the node         | bin    | ro     |
| name      | Hash value of the NCR.name      | #      | ro     |
| time      | Creation date                   | utc    | ro     |
| sign      | Signature of name by NCR.pubkey | bin    | rc     |
| state     | The state of the (PN , N , AN ) | uint   | rc     |
| gene      | Node gene bit-string            | bin    | rc     |

## Sub-Network contract

Via a special contract executed on the Tagion Main Network (**_TMN_**), a Tagion Sub Network (**_TSN_**) can be launched, this sub-network will create a new sub-DART which only can be updated from the nodes running the TSN.
A group of nodes can initiate the sub-network by signing this contract and stake an amount in TGS. The rules for the TSN is set when the network is launched, and the rules can differ from the rules in TMN. The TSN can be assigned to a group of nodes or fully open for all nodes. When a TSN has launched, a Tagion Sub Network Funds (**_TSNF_**) is created on the main network to hold the funds for the fees in the main network. The funds are used to pay rewards to the nodes running the TSN and to pay fees to the main; when an epoch is created in TSN the bull’s eye for TSN, a contract is automatically sent to the MTN, and a fee is deducted from the TSNF account and burned. If there are not enough funds in the TSNF account, TMN rejects the contract.
TGS used in the TSN must be locked in a Tagion Sub Network Account (**\***TSNA**\***). These funds can only be transferred between other TSNA and to the TSNF. Funds can not be transferred from TSNF to a TSNA.
The funds in TSNA can be transferred to TGS-bills again via TSNA-contract. This contract can take multiple TSNA as input and will transfer all the funds to bills on the output, all the
input TSNA will be deleted from DART, as is the case with TGS-bills.

### Basic rules for a Sub-Network

§1 TSN can have a different rule set than applies for TMN.
§2 No nodes can transfer money out of a TSNF account.
§3 An TSNF account is used to pay rewards to the TSN nodes and the burning fees to the TMN.
§4 An TSNA account funds can be transferred to a TSNF account.
§5 An TSNA account can transfer money to other TSNA accounts. The fees burned are a little higher than fees for bills.
§6 The rewards in the TSN are paid from the TSNF account because a TSN can not print TGS as rewards, as is the case for TSN.
