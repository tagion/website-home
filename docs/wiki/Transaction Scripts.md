# Transaction Scripts

[![hackmd-github-sync-badge](https://hackmd.io/JBEh5tYjSwe8ckgsR6qntA/badge)](https://hackmd.io/JBEh5tYjSwe8ckgsR6qntA)



When the network receives a transaction request, it is added in an epoch and executed by the scripting engine. A transaction request includes a transaction object which is a data package in **HiBON** format. The **HiBON** object contains input bill numbers and the transaction script, including a list of digital signatures which signs the transaction script object. The signatures can be verified via the public keys represented in the input bills.

Table 9: Standard archived Bill object:



| Parameter | Description   | Type      |
| --------- | ------------- | --------- |
| V         | Value         | Mandatory |
| B         | Previous bill | Mandatory |
| k         | Epoch number  | Mandatory |
| T         | Bill type     | Mandatory |
| Y         | Owner key     | Mandatory |
| ...          | ...              |  ...         |

Table 10: Transaction scripting object:



| Parameter  | Description                           | Type      |
| ---------- | ------------------------------------- | --------- |
| payers     | Array of Bill numbers and public keys | Mandatory |
| payers     | Array of public key hashes            | Mandatory |
| parameters | Parameters used by the script         | Optional  |
| script           |Transaction script                                        |Mandatory          |

Table 11: Transaction object:



| Parameter | Description      | Type      |
| --------- | ---------------- | --------- |
| record    | Scripting object | Mandatory |
| signatures          |Array of input signatures                 |Mandatory          |

## Transaction Epoch consensus rules

1. If one or more script object is found with the same input bill number, the first transaction object in the epoch is kept in the epoch list. Any other object flows in the list are removed.
 
## Transaction object initial consensus rules

1. The size of the inputs array in the script record must be one or more.
2. The size of the inputs array and the signature arrays must be the same.
3. The bill type of the first type input must be a Tagion type.
4. Duplicate bill numbers are not allowed.
5. All the inputs must be in the current state of the **DART**.

If a transaction object violates one of the initial consensus rules, it is handled by a violation script function.

## Transaction scripting execution 

Because the epoch list is guaranteed to prevent inputs with the same bill number, a node can choose to execute the scripts in the epoch in parallel.

### First execution procedure and rules

1. The bills within the node’s **DART** angle have read from the **DART**.
2. The read bills have gossiped to the network.
3. If the script object has only one input, the script is immediately executed.
4. If all the bills in the inputs have been covered in the local **DART**, the script is executed immediately.
 
### Second execution procedure and rules

1. The script is executed if all the inputs are received or read for a transaction object, and the signatures are correct.
2. The script must finish with a burn function which burns the transaction fee.
3. If the sum of all outputs of the bill type Tagions (bill type can be Tagions or external contracts of, e.g., Euros) is greater than the sum of the input minus the transaction fee, the first input bill is scheduled to be removed, and the transaction is ignored.
4. If the sum of all outputs of types other than Tagion is greater than the input, the first input bill is scheduled to be removed, and the transaction is ignored.
 
### DART execution procedure


  1. When all scripts have been executed, the process of updating the **DART** begins.
2. All inputs of successfully executed scripts must be removed from sections covered by the node.
3. All outputs of the successfully executed script must be added to the sections covered by the node.
4. All the Merkle roots within the section angle must be calculated, signed, and gossiped to the network. Note: From this point, the node can start executing the next epoch.
5. When the node has received the majority for all the sections’ Merkle, it calculates the Bull’s eye of the **DART**, which is signed and gossiped to the network.
6. When most consistent Bull’s eyes have been received, the node decides that the **DART** has been updated and changed states. Note: A transaction has been completed at the new state.
7. If one of the above rules fails, the **DART** is reverted to the previous state.


 ***Note:*** When a node receives a transaction object, it can send a request to the **DART** to collect the inputs of the script. Doing the execution in parallel improves the transaction time instead of starting to collect inputs when the epoch has been completed.
