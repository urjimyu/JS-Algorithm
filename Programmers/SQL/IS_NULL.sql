-- 경기도에 위치한 식품창고 목록 출력하기
SELECT WAREHOUSE_ID, WAREHOUSE_NAME, ADDRESS, IFNULL(FREEZER_YN, 'N') FREEZER_YN
FROM FOOD_WAREHOUSE
WHERE ADDRESS LIKE '경기도%'
ORDER BY 1;

-- NULL 처리하기
SELECT ANIMAL_TYPE, IFNULL(NAME, 'No name') NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
ORDER BY ANIMAL_ID;

-- ROOT 아이템 구하기
SELECT i.ITEM_ID ITEM_ID, ITEM_NAME
FROM ITEM_TREE t JOIN ITEM_INFO i
ON t.ITEM_ID = i.ITEM_ID
WHERE t.PARENT_ITEM_ID IS NULL
ORDER BY 1;

-- 업그레이드 할 수 없는 아이템 구하기
WITH CTE AS (
SELECT DISTINCT PARENT_ITEM_ID CAN_UPGRADE FROM ITEM_TREE
)

SELECT i.ITEM_ID, ITEM_NAME, RARITY
FROM ITEM_INFO i JOIN ITEM_TREE t
ON i.ITEM_ID = t.ITEM_ID
LEFT JOIN CTE c
ON i.ITEM_ID = c.CAN_UPGRADE
WHERE c.CAN_UPGRADE IS NULL
ORDER BY 1 DESC;

-- 더 간단한 풀이
SELECT i.ITEM_ID, ITEM_NAME, RARITY
FROM ITEM_INFO i
LEFT JOIN ITEM_TREE t
ON i.ITEM_ID = t.PARENT_ITEM_ID
WHERE t.ITEM_ID IS NULL
ORDER BY 1 DESC;