1. select * from wareHouse.ITEMS
   where Weight = (select MIN(WEIGHT) from wareHouse.ITEMS);

2.SELECT *
  FROM WareHouse.WareHouse
  INNER JOIN CITIES ON WareHouse.WareHouse.CITYId = WareHouse.cities.id
  where WareHouse.cities.city = 'PUNE';

 3. SELECT *
    FROM WareHouse.ITEMS
    INNER JOIN WareHouse.ITEM_ORDER ON  WareHouse.ITEM_ORDER.ITEMNO = WareHouse.ITEMS.ITEMNO
    INNER JOIN WareHouse.Orders ON  WareHouse.ITEM_ORDER.ONO = WareHouse.Orders.ONO
    INNER JOIN WareHouse.Customer ON  WareHouse.Customer.CNO = WareHouse.Orders.Customer_Id
    having WareHouse.Customer.CNAME = 'Mr. Patil';

 4.SELECT WNAME, COUNT(STORES.WAREHOUSE_ID)
   FROM WareHouse.WareHouse
   INNER JOIN STORES ON WareHouse.WID = STORES.WAREHOUSE_ID
   GROUP BY WareHouse.WID
   ORDER BY COUNT(WNAME) DESC LIMIT 1;

 5.SELECT DESCRIPTION, COUNT(ITEMS.ITEMNO)
   FROM  ITEMS
   INNER JOIN ITEM_ORDER ON  ITEMS.ITEMNO = ITEM_ORDER.ITEMNO
   GROUP BY ITEMS.ITEMNO
   ORDER BY COUNT(DESCRIPTION) ASC LIMIT 1;

 6. SELECT *
    FROM  Orders
    INNER JOIN Customer ON  Orders.Customer_Id = Customer.CNO;
