CREATE TABLE `cities` (
  `CITY` varchar(20) DEFAULT NULL,
  `STATE` varchar(20) DEFAULT NULL,
  `id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Customer` (
  `CNO` int NOT NULL,
  `CNAME` varchar(50) DEFAULT NULL,
  `ADDR` varchar(50) DEFAULT NULL,
  `CU_CITY_CHAR` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`CNO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `ITEM_ORDER` (
  `ITEMNO` int NOT NULL,
  `ONO` int NOT NULL,
  KEY `warehouse_ibfo_3_idx` (`ITEMNO`),
  KEY `warehouse_ibfq_4_idx` (`ONO`),
  CONSTRAINT `warehouse_ibfo_3` FOREIGN KEY (`ITEMNO`) REFERENCES `ITEMS` (`ITEMNO`),
  CONSTRAINT `warehouse_ibfq_4` FOREIGN KEY (`ONO`) REFERENCES `Orders` (`ONO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `ITEMS` (
  `ITEMNO` int NOT NULL,
  `DESCRIPTION` varchar(255) DEFAULT NULL,
  `WEIGHT` decimal(5,2) DEFAULT NULL,
  `COST` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`ITEMNO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Orders` (
  `ONO` int NOT NULL,
  `ODATE` date DEFAULT NULL,
  `Customer_Id` int DEFAULT NULL,
  PRIMARY KEY (`ONO`),
  KEY `warehouse_ibfs_2
_idx` (`Customer_Id`),
  CONSTRAINT `warehouse_ibfs_2
` FOREIGN KEY (`Customer_Id`) REFERENCES `Customer` (`CNO`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `STORES` (
  `SID` int NOT NULL,
  `STORE_NAME` varchar(20) DEFAULT NULL,
  `LOCATION_CITY` varchar(20) DEFAULT NULL,
  `WAREHOUSE_ID` int DEFAULT NULL,
  PRIMARY KEY (`SID`),
  KEY `warehouse_ibfl_2_idx` (`WAREHOUSE_ID`),
  CONSTRAINT `warehouse_ibfl_2` FOREIGN KEY (`WAREHOUSE_ID`) REFERENCES `WareHouse` (`WID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `STORES_ITEMS` (
  `ITEMNO` int NOT NULL,
  `SID` int NOT NULL,
  KEY `warehouse_ibfn_4_idx` (`SID`),
  KEY `warehouse_ibfe_5_idx` (`ITEMNO`),
  CONSTRAINT `warehouse_ibfe_5` FOREIGN KEY (`ITEMNO`) REFERENCES `ITEMS` (`ITEMNO`),
  CONSTRAINT `warehouse_ibfn_4` FOREIGN KEY (`SID`) REFERENCES `STORES` (`SID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `WareHouse` (
  `WID` int NOT NULL,
  `WNAME` varchar(30) DEFAULT NULL,
  `LOCATION` varchar(20) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `CITYId` int DEFAULT NULL,
  PRIMARY KEY (`WID`),
  KEY `warehouse_ibfk_1` (`CITYId`),
  CONSTRAINT `warehouse_ibfk_1` FOREIGN KEY (`CITYId`) REFERENCES `cities` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
