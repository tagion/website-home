[![hackmd-github-sync-badge](https://hackmd.io/xtYAclyYRjSJ4c480l7PYg/badge)](https://hackmd.io/xtYAclyYRjSJ4c480l7PYg)
#  Scripting Engine


The scripting engine’s language is called Funnel. It is based on a stack machine, a simple, functional language inspired by the programming language **FORTH**.
The scripting engine executes at different run levels. The lowest level is the total Turing equivalent and can only make conditional forward jumps; it cannot run loops or functions. Several instructions executed limit the scripting engine, call stack depth, data stack depth, and memory.
The limitation is done to prevent a script from running into infinite loops. The transaction script can use a library of standard functions, which is stored in the **DART**, and the fingerprint of the script, which is stored in the Bull’s eye blockchain that is the current state of the script.
Table 7: Runlevels for the Scripting engine:



| Run level | Description                       | Limitation                                          |
| --------- | --------------------------------- | --------------------------------------------------- |
| 0         | Consensus script                  | No limits, full Turing equivalent                   |
| 1         | Debug script function (read-only) | Limit resources, read-only call function to level 0 |
| 2         | Transaction function              | Limit resources and call function to levels 0 and 1 |
| 3          |    Transaction script                               |                     Limit instruction and call function to level 2                               |


In contrast, standard FORTH Funnel is a strictly typed language supporting the types shown in table 8.
Converting from one type to another must be explicitly instructed via a type casting function. If the casting fails, the scripting engine generates an error, and the script stops. The scripting engine stops on overflow/underflow/divide-by-zero errors and if an operator is operating on invalid types.
Table 8: Scripting types supported:



| name     | Description                 | D-Type   |
| -------- | --------------------------- | -------- |
| TEXT     | UTF-8 text                  | string   |
| INTEGER  | signend 64-bits number      | long     |
| CARDINAL | Unsignend 64-bits number    | ulong    |
| BIG      | Unsigend big integer number | BigUint  |
| HiBON    | HiBON Read/Write-only       | HiBON    |
| DOCUMENT | HiBON Read only             | Document |
| BIN         |  Byte arrays, used to hold keys and hash value                           |  ubyte[]        |

### Funnel Sample code for a test contract**

 ![](https://i.imgur.com/HfwFV6R.png)
 ![](https://i.imgur.com/27aJP3Q.png)
 ![](https://i.imgur.com/uk2q7vq.png)
 ![](https://i.imgur.com/ZftBxmj.png)
 ![](https://i.imgur.com/7H35OtA.png)



 

