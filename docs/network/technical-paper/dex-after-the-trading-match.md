---
lang: en-US
editLink: true
sidebar: true
sidebarDepth: 2
---

# DEX After the Trading Match

The trade is executed from the first order in the queue at the top of the table [21](https://github.com/tagion-program/space-content/blob/master/DEX%20Trading%20Example.md) and the matching pairs shown in the table 24. A BTO order from the table 21 is searched in table [22](https://github.com/tagion-program/space-content/blob/master/DEX%20Trading%20Example.md) to see if ![](https://i.imgur.com/BpEkIJF.png), and if the order is an ATO the table 23 is searched and if a match is found. [23](https://github.com/tagion-program/space-content/blob/master/DEX%20Trading%20Example.md) is searched and if![](https://i.imgur.com/GkFsDVh.png)![](https://i.imgur.com/0C7t4gz.png)a match is found. The executed trading orders are shown in table 25, and the remaining orders are shown in table 28. The parameter **Id** shown in the tables represents the execution order and matching **Id** of the trading pairs, and **No** is the priority order in the trading-order queue.

**Table 24. List of the matching pairs:**

| Buyer → Seller | No → No | Ebuyer  | Eseller | Bought    | Sold      | Id  |
| -------------- | ------- | ------- | ------- | --------- | --------- | --- |
| ATO→BTO        | 1→8     | 0.0870  | 0.0685  | 6.00TGS   | 87.60ACL  | 1   |
| BTO→ATO        | 2→14    | 11.6000 | 8.3077  | 473.54ACL | 57.00TGS  | 2   |
| ATO→BTO        | 4→26    | 0.0885  | 0.0746  | 4.00TGS   | 53.60ACL  | 3   |
| BTO→ATO        | 5→30    | 13.1818 | 8.4167  | 217.00ACL | 25.78TGS  | 4   |
| BTO→ATO        | 6→23    | 8.8462  | 8.7692  | 324.46ACL | 37.00TGS  | 5   |
| BTO→ATO        | 7→13    | 13.1818 | 8.8333  | 205.00ACL | 23.21TGS  | 6   |
| BTO→ATO        | 9→28    | 11.7000 | 9.8571  | 157.71ACL | 16.00TGS  | 7   |
| BTO→ATO        | 10→17   | 11.2000 | 10.0909 | 433.91ACL | 43.00TGS  | 8   |
| BTO→ATO        | 15→20   | 10.9167 | 10.2857 | 341.00ACL | 33.15TGS  | 9   |
| BTO→ATO        | 18→29   | 11.3333 | 10.4000 | 85.00ACL  | 8.17TGS   | 10  |
| BTO→ATO        | 21→34   | 12.1818 | 10.7692 | 323.08ACL | 30.00TGS  | 11  |
| ATO→BTO        | 22→33   | 0.0863  | 0.0833  | 18.83TGS  | 226.00ACL | 12  |
| ATO→BTO        | 25→27   | 0.0916  | 0.0890  | 44.00TGS  | 494.15ACL | 13  |

**Table 25. Orders which are matched and executed:**

| No  | Type | Size   | P   | Q   | Eask   | Ebid    | Bought    | Sold      | Id  |
| --- | ---- | ------ | --- | --- | ------ | ------- | --------- | --------- | --- |
| 1   | ATO  | 6TGS   | 138 | 12  | 0.0870 | 11.5000 | 6.00TGS   |           | 1   |
| 2   | BTO  | 785ACL | 116 | 10  | 0.0862 | 11.6000 | 473.54ACL |           | 2   |
| 4   | ATO  | 4TGS   | 113 | 10  | 0.0885 | 11.3000 | 4.00TGS   |           | 3   |
| 5   | BTO  | 217ACL | 145 | 11  | 0.0759 | 13.1818 | 217.00ACL |           | 4   |
| 6   | BTO  | 936ACL | 115 | 13  | 0.1130 | 8.8462  | 324.46ACL |           | 5   |
| 7   | BTO  | 205ACL | 145 | 11  | 0.0759 | 13.1818 | 205.00ACL |           | 6   |
| 8   | BTO  | 949ACL | 146 | 10  | 0.0685 | 14.6000 |           | 87.60ACL  | 1   |
| 9   | BTO  | 888ACL | 117 | 10  | 0.0855 | 11.7000 | 157.71ACL |           | 7   |
| 10  | BTO  | 587ACL | 112 | 10  | 0.0893 | 11.2000 | 433.91ACL |           | 8   |
| 13  | ATO  | 72TGS  | 106 | 12  | 0.1132 | 8.8333  |           | 23.21TGS  | 6   |
| 14  | ATO  | 57TGS  | 108 | 13  | 0.1204 | 8.3077  |           | 57.00TGS  | 2   |
| 15  | BTO  | 341ACL | 131 | 12  | 0.0916 | 10.9167 | 341.00ACL |           | 9   |
| 17  | ATO  | 43TGS  | 111 | 11  | 0.0991 | 10.0909 |           | 43.00TGS  | 8   |
| 18  | BTO  | 85ACL  | 136 | 12  | 0.0882 | 11.3333 | 85.00ACL  |           | 10  |
| 20  | ATO  | 63TGS  | 144 | 14  | 0.0972 | 10.2857 |           | 33.15TGS  | 9   |
| 21  | BTO  | 716ACL | 134 | 11  | 0.0821 | 12.1818 | 323.08ACL |           | 11  |
| 22  | ATO  | 42TGS  | 139 | 12  | 0.0863 | 11.5833 | 18.83TGS  |           | 12  |
| 23  | ATO  | 37TGS  | 114 | 13  | 0.1140 | 8.7692  |           | 37.00TGS  | 5   |
| 25  | ATO  | 44TGS  | 131 | 12  | 0.0916 | 10.9167 | 44.00TGS  |           | 13  |
| 26  | BTO  | 87ACL  | 134 | 10  | 0.0746 | 13.4000 |           | 53.60ACL  | 3   |
| 27  | BTO  | 739ACL | 146 | 13  | 0.0890 | 11.2308 |           | 494.15ACL | 13  |
| 28  | ATO  | 16TGS  | 138 | 14  | 0.1014 | 9.8571  |           | 16.00TGS  | 7   |
| 29  | ATO  | 42TGS  | 104 | 10  | 0.0962 | 10.4000 |           | 8.17TGS   | 10  |
| 30  | ATO  | 79TGS  | 101 | 12  | 0.1188 | 8.4167  |           | 25.78TGS  | 4   |
| 33  | BTO  | 226ACL | 144 | 12  | 0.0833 | 12.0000 |           | 226.00ACL | 12  |
| 34  | ATO  | 30TGS  | 140 | 13  | 0.0929 | 10.7692 |           | 30.00TGS  | 11  |

**Table 26. Sort list of ATO which are executed:**

|

| No  | Type | Size  | P   | Q   | Eask   | Ebid    | Bought   | Sold     | Id  |
| --- | ---- | ----- | --- | --- | ------ | ------- | -------- | -------- | --- |
| 14  | ATO  | 57TGS | 108 | 13  | 0.1204 | 8.3077  |          | 57.00TGS | 2   |
| 30  | ATO  | 79TGS | 101 | 12  | 0.1188 | 8.4167  |          | 25.78TGS | 4   |
| 23  | ATO  | 37TGS | 114 | 13  | 0.1140 | 8.7692  |          | 37.00TGS | 5   |
| 13  | ATO  | 72TGS | 106 | 12  | 0.1132 | 8.8333  |          | 23.21TGS | 6   |
| 28  | ATO  | 16TGS | 138 | 14  | 0.1014 | 9.8571  |          | 16.00TGS | 7   |
| 17  | ATO  | 43TGS | 111 | 11  | 0.0991 | 10.0909 |          | 43.00TGS | 8   |
| 20  | ATO  | 63TGS | 144 | 14  | 0.0972 | 10.2857 |          | 33.15TGS | 9   |
| 29  | ATO  | 42TGS | 104 | 10  | 0.0962 | 10.4000 |          | 8.17TGS  | 10  |
| 34  | ATO  | 30TGS | 140 | 13  | 0.0929 | 10.7692 |          | 30.00TGS | 11  |
| 25  | ATO  | 44TGS | 131 | 12  | 0.0916 | 10.9167 | 44.00TGS |          | 13  |
| 4   | ATO  | 4TGS  | 113 | 10  | 0.0885 | 11.3000 | 4.00TGS  |          | 3   |
| 1   | ATO  | 6TGS  | 138 | 12  | 0.0870 | 11.5000 | 6.00TGS  |          | 1   |
| 22  | ATO  | 42TGS | 139 | 12  | 0.0863 | 11.5833 | 18.83TGS |          | 12  |

**Table 27. Sort list of BTO which are executed:**

| No  | Type | Size   | P   | Q   | Eask   | Ebid    | Bought    | Sold      | Id  |
| --- | ---- | ------ | --- | --- | ------ | ------- | --------- | --------- | --- |
| 8   | BTO  | 949ACL | 146 | 10  | 0.0685 | 14.6000 |           | 87.60ACL  | 1   |
| 26  | BTO  | 87ACL  | 134 | 10  | 0.0746 | 13.4000 |           | 53.60ACL  | 3   |
| 7   | BTO  | 205ACL | 145 | 11  | 0.0759 | 13.1818 | 205.00ACL |           | 6   |
| 5   | BTO  | 217ACL | 145 | 11  | 0.0759 | 13.1818 | 217.00ACL |           | 4   |
| 21  | BTO  | 716ACL | 134 | 11  | 0.0821 | 12.1818 | 323.08ACL |           | 11  |
| 33  | BTO  | 226ACL | 144 | 12  | 0.0833 | 12.0000 |           | 226.00ACL | 12  |
| 9   | BTO  | 888ACL | 117 | 10  | 0.0855 | 11.7000 | 157.71ACL |           | 7   |
| 2   | BTO  | 785ACL | 116 | 10  | 0.0862 | 11.6000 | 473.54ACL |           | 2   |
| 18  | BTO  | 85ACL  | 136 | 12  | 0.0882 | 11.3333 | 85.00ACL  |           | 10  |
| 27  | BTO  | 739ACL | 146 | 13  | 0.0890 | 11.2308 |           | 494.15ACL | 13  |
| 10  | BTO  | 587ACL | 112 | 10  | 0.0893 | 11.2000 | 433.91ACL |           | 8   |
| 15  | BTO  | 341ACL | 131 | 12  | 0.0916 | 10.9167 | 341.00ACL |           | 9   |
| 6   | BTO  | 936ACL | 115 | 13  | 0.1130 | 8.8462  | 324.46ACL |           | 5   |

**Table 28. DEX Trading order queue of the orders which are not yet executed:**

| No  | Type | Size   | P   | Q   | Eask   | Ebid    | Bought | Sold | Id  |
| --- | ---- | ------ | --- | --- | ------ | ------- | ------ | ---- | --- |
| 0   | ATO  | 83TGS  | 147 | 10  | 0.0680 | 14.7000 |        |      |     |
| 3   | ATO  | 79TGS  | 149 | 10  | 0.0671 | 14.9000 |        |      |     |
| 11  | BTO  | 314ACL | 126 | 13  | 0.1032 | 9.6923  |        |      |     |
| 12  | BTO  | 503ACL | 118 | 12  | 0.1017 | 9.8333  |        |      |     |
| 16  | ATO  | 15TGS  | 127 | 10  | 0.0787 | 12.7000 |        |      |     |
| 19  | ATO  | 29TGS  | 144 | 10  | 0.0694 | 14.4000 |        |      |     |
| 24  | ATO  | 45TGS  | 136 | 10  | 0.0735 | 13.6000 |        |      |     |
| 31  | BTO  | 725ACL | 117 | 13  | 0.1111 | 9.0000  |        |      |     |
| 32  | ATO  | 3TGS   | 144 | 13  | 0.0903 | 11.0769 |        |      |     |
| 35  | BTO  | 526ACL | 131 | 14  | 0.1069 | 9.3571  |        |      |     |

**Table 29. Sort list of ATO which are not yet executed:**

| No  | Type | Size  | P   | Q   | Eask   | Ebid    | Bought | Sold | Id  |
| --- | ---- | ----- | --- | --- | ------ | ------- | ------ | ---- | --- |
| 32  | ATO  | 3TGS  | 144 | 13  | 0.0903 | 11.0769 |        |      |     |
| 16  | ATO  | 15TGS | 127 | 10  | 0.0787 | 12.7000 |        |      |     |
| 24  | ATO  | 45TGS | 136 | 10  | 0.0735 | 13.6000 |        |      |     |
| 19  | ATO  | 29TGS | 144 | 10  | 0.0694 | 14.4000 |        |      |     |
| 0   | ATO  | 83TGS | 147 | 10  | 0.0680 | 14.7000 |        |      |     |
| 3   | ATO  | 79TGS | 149 | 10  | 0.0671 | 14.9000 |        |      |     |

**Table 30. Sort list of BTO which are not yet executed:**

| No  | Type | Size   | P   | Q   | Eask   | Ebid   | Bought | Sold | Id  |
| --- | ---- | ------ | --- | --- | ------ | ------ | ------ | ---- | --- |
| 12  | BTO  | 503ACL | 118 | 12  | 0.1017 | 9.8333 |        |      |     |
| 11  | BTO  | 314ACL | 126 | 13  | 0.1032 | 9.6923 |        |      |     |
| 35  | BTO  | 526ACL | 131 | 14  | 0.1069 | 9.3571 |        |      |     |
| 31  | BTO  | 725ACL | 117 | 13  | 0.1111 | 9.0000 |        |      |     |
