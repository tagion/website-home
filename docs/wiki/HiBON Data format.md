#  HiBON Data format


 All data exchanged and stored in the network is structured using a data format called Hashinvariant Binary Object Notation (***HiBON***), which Binary JSON inspires (***BSON***), but the two formats are not compatible. In HiBON, the keys are sorted according to the ordering rules described below (in D-lang). By ordering the keys, the data is hash invariant for the same collection.

![](https://i.imgur.com/gCbIu8J.png)
![](https://i.imgur.com/dbGRe3S.png)
![](https://i.imgur.com/uztdGyq.png)

Table 15. HiBON Basic data-types:




| Data type               | Code | D-Type     | Description                                                   |
| ----------------------- | ---- | ---------- | ------------------------------------------------------------- |
| float64                 | 0x01 | double     | 64bit floating point                                          |
| string                  | 0x02 | string     | UTF-8 string                                                  |
| Embedded document       | 0x03 | {}         | HiBON object                                                  |
| Embedded array          | 0x04 | []         | HiBON Array object (Only index numbers allowed)               |
| Boolean                 | 0x08 | bool       | Boolean false=0, true=1                                       |
| 64bits UTC Time         | 0x09 | utc        | UTC datetime 64bits signed integer                            |
| int32 number            | 0x10 | int        | 32bit usigned number                                          |
| int64 number            | 0x12 | long       | 64bits signed integer                                         |
| float128                | 0x13 | decimal    | 128bits floating point                                        |
| Big integer             | 0x18 | bigint     | Signed big integer                                            |
| uint32                  | 0x20 | unit       | 32bit unsigned number                                         |
| float32                 | 0x21 | float      | 32bit floating point                                          |
| uint64                  | 0x22 | ulong      | 64bit unsigned number                                         |
| Big integer             | 0x28 | ubigint    | Unsigned big integer                                          |
| Native Document         | 0x43 | Document   | Reserved for internal use only                                |
| Defines Array           | 0x80 | void       | Reserved type for internal use only                           |
| Array of float64        | 0x81 | double[]   | Array of unsigned 64bits integer (size is multiple of 8bytes) |
| Binary string           | 0x85 | ubyte[]    | Array of bytes (size is multiple of 1bytes)                   |
| Array of int32          | 0x90 | int[]      | Array of 32bits signed integers (size is multiple of 4bytes)  |
| Array of int64          | 0x92 | long[]     | Array of 64bits signed integer (size is multiple of 8bytes)   |
| Array of int32          | 0x90 | int[]      | Array of 32bits integer (size is multiple of 4bytes)          |
| Array of uint64         | 0x92 | long[]     | Array of 64bits integer (size is multiple of 8bytes)          |
| Array of float128       | 0x93 | decimal[]  | Array of 128bits floating point (size is multiple of 16bytes) |
| Array of uint32         | 0xA0 | uint[]     | Array of unsigned 32bits integer (size is multiple of 4bytes) |
| Array of float32        | 0xA1 | float[]    | Array of 32bits floating point (size is multiple of 4bytes)   |
| Array of int64          | 0xA2 | ulong[]    | Array of unsigned 64bits integer (size is multiple of 8bytes) |
| Defines string arrays   | 0x83 | string[]   | Reserved type for internal use only                           |
| Defines Document arrays | 0xC3 | Document[] | Reserved type for internal use only                           |
| Defines HiBON arrays    | 0x82 |HiBON[]     |Reserved type for internal use only          |
 
  Any data types which are not defined in table 15 are illegal and must be rejected by the network. The types used in the table is primarily the types used in D except for a few as {} and[].
                                                         

                                                             


 

