#  HRPC – HiBON Remote Procedure Call

HRPC works like JSON-RPC just with signed binary data, the above-defined HiBON format. It means the data is hash-invariant enabling hash- and signature functions to be executed fast and non-ambiguous.

Table 16. HRPC format:



| Parameter | Description                                 | Type   | Access |
| --------- | ------------------------------------------- | ------ | ------ |
| $type     | Set contract type to ’HRPC’                 | string | ro     |
| $pkey     | Public key                                  | bin    | ro     |
| $sign     | Signature of $msg                           | bin    | ro     |
| $msg      | Message object table 17, table 18, table 19 | {}     | ro     |

Table 17. HRPC method message object:


| Parameter | Description                  | Type   | Access |
| --------- | ---------------------------- | ------ | ------ |
| $id       | Message id                   | unit   | ro     |
| $method   | Name of remote call function | string | ro     |
| $params   | Params for the $method function (optional)      |     {}   | ro       |

Table 18. HRPC success message object:


| Parameter | Description | Type | Access |
| --------- | ----------- | ---- | ------ |
| $id       | Message id  | unit | ro     |
| $result   | Result of the method call| any|  ro|

Table 19. HPPC error response object:


| Parameter | Description | Type   | Access |
| --------- | ----------- | ------ | ------ |
| $id       | Message id  | string | ro     |
| $error    | Error object table 20| {}|  ro      |

Table 20. HRPC error object:


| Parameter | description                 | Type   | Access |
| --------- | --------------------------- | ------ | ------ |
| code      | Set contract type to ’HRPC’ | unit   | ro     |
| message   | Error message               | string | ro     |
| data      | Data object (optional)|  [] |ro








