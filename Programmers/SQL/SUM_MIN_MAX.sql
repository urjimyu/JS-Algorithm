-- 가장 비싼 상품구하기
SELECT MAX(PRICE) FROM PRODUCT AS MAX_PRICE;

-- 가격이 제일 비싼 식품의 정보 출력하기
SELECT PRODUCT_ID, PRODUCT_NAME, PRODUCT_CD, CATEGORY, PRICE
FROM FOOD_PRODUCT
WHERE PRICE
IN (SELECT MAX(PRICE) FROM FOOD_PRODUCT);

-- 최댓값 구하기
SELECT MAX(DATETIME) FROM ANIMAL_INS;

-- 최솟값 구하기
SELECT MIN(DATETIME) FROM ANIMAL_INS;

-- 동물 수 구하기
SELECT COUNT(ANIMAL_ID) FROM ANIMAL_INS;

-- 중복 제거하기
SELECT COUNT(DISTINCT NAME) AS count FROM ANIMAL_INS;

-- 조건에 맞는 아이템들의 가격의 총합 구하기
-- 풀이 1
SELECT SUM(PRICE) AS TOTAL_PRICE
    FROM ITEM_INFO
        WHERE RARITY='LEGEND';

-- 조건에 맞는 아이템들의 가격의 총합 구하기
-- 풀이 2
SELECT SUM(PRICE) TOTAL_PRICE
FROM ITEM_INFO
GROUP BY RARITY
HAVING RARITY = 'LEGEND'

