-- 경기도에 위치한 식품창고 목록 출력하기
SELECT WAREHOUSE_ID, WAREHOUSE_NAME, ADDRESS, IFNULL(FREEZER_YN, 'N') FREEZER_YN
FROM FOOD_WAREHOUSE
WHERE ADDRESS LIKE '경기도%'
ORDER BY 1;

-- NULL 처리하기
SELECT ANIMAL_TYPE, IFNULL(NAME, 'No name') NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
ORDER BY ANIMAL_ID;

