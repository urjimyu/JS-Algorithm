-- 과일로 만든 아이스크림 고르기
SELECT A.FLAVOR
    FROM FIRST_HALF A
    JOIN ICECREAM_INFO B
        ON A.FLAVOR = B.FLAVOR
        WHERE A.TOTAL_ORDER > 3000
        AND B.INGREDIENT_TYPE = 'fruit_based'
            ORDER BY A.TOTAL_ORDER DESC;

-- 3월에 태어난 여성 회원 목록 출력하기
SELECT MEMBER_ID, MEMBER_NAME, GENDER, DATE_FORMAT(DATE_OF_BIRTH, '%Y-%m-%d') AS DATE_OF_BIRTH
    FROM MEMBER_PROFILE
    WHERE TLNO IS NOT NULL
    AND GENDER = 'W'
    AND MONTH(DATE_OF_BIRTH) = 3
    ORDER BY MEMBER_ID;

-- 조건에 부합하는 중고거래 댓글 조회하기
SELECT A.TITLE, A.BOARD_ID, B.REPLY_ID, B.WRITER_ID, B.CONTENTS, DATE_FORMAT(B.CREATED_DATE, '%Y-%m-%d')
    FROM USED_GOODS_BOARD A, USED_GOODS_REPLY B
    WHERE A.BOARD_ID = B.BOARD_ID
    AND YEAR(A.CREATED_DATE) = 2022
    AND MONTH(A.CREATED_DATE) = 10
    ORDER BY B.CREATED_DATE, A.TITLE;

-- 인기있는 아이스크림
SELECT FLAVOR
    FROM FIRST_HALF
    ORDER BY TOTAL_ORDER DESC, SHIPMENT_ID;

-- 강원도에 위치한 생산공장 목록 출력하기
SELECT FACTORY_ID, FACTORY_NAME, ADDRESS
    FROM FOOD_FACTORY
    WHERE SUBSTR(ADDRESS, 1, 3) = '강원도'
    ORDER BY FACTORY_ID;

-- 12세 이하인 여자 환자 목록 출력하기
SELECT PT_NAME, PT_NO, GEND_CD, AGE, IFNULL(TLNO, 'NONE') AS TLNO
    FROM PATIENT
    WHERE GEND_CD = 'W'
    AND AGE <= 12
    ORDER BY AGE DESC, PT_NAME;

-- 조건에 맞는 도서 리스트 출력하기
SELECT BOOK_ID, DATE_FORMAT(PUBLISHED_DATE, '%Y-%m-%d') AS PUBLISHED_DATE
    FROM BOOK
    WHERE YEAR(PUBLISHED_DATE) = 2021
    AND CATEGORY = '인문'
    ORDER BY PUBLISHED_DATE;

-- 재구매가 일어난 상품과 회원 리스트 구하기
SELECT USER_ID, PRODUCT_ID
FROM ONLINE_SALE
GROUP BY 1,2
HAVING COUNT(*) > 1
ORDER BY USER_ID, PRODUCT_ID DESC;

-- 모든 레토드 조회하기
SELECT *
FROM ANIMAL_INS
ORDER BY ANIMAL_ID;

-- 어린 동물 찾기
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION != 'AGED'
ORDER BY 1;

-- 상위 n개 레코드
SELECT NAME
FROM ANIMAL_INS
ORDER BY DATETIME
LIMIT 1;

-- 조건에 맞는 회원수 구하기
SELECT COUNT(*) AS USERS
FROM USER_INFO
WHERE AGE BETWEEN 20 AND 29
AND JOINED LIKE '2021%';

-- 업그레이드 된 아이템 구하기
SELECT I.ITEM_ID AS ITEM_ID, I.ITEM_NAME AS ITEM_NAME, I.RARITY AS RARITY
FROM ITEM_INFO I JOIN ITEM_TREE T
ON I.ITEM_ID = T.ITEM_ID
WHERE T.PARENT_ITEM_ID
IN (SELECT ITEM_ID 
    FROM ITEM_INFO 
    WHERE RARITY = 'RARE')
ORDER BY ITEM_ID DESC;

-- Python 개발자 찾기
SELECT ID, EMAIL, FIRST_NAME, LAST_NAME
FROM DEVELOPER_INFOS
WHERE 'Python' IN (SKILL_1, SKILL_2, SKILL_3)
ORDER BY ID;

-- 조건에 맞는 개발자 찾기
SELECT DISTINCT(D.ID), D.EMAIL, D.FIRST_NAME, D.LAST_NAME
FROM DEVELOPERS D JOIN SKILLCODES S
ON (D.SKILL_CODE & S.CODE) > 0
WHERE S.NAME IN ('Python', 'C#')
ORDER BY 1;

-- 잔챙이 잡은 수 구하기
SELECT COUNT(ID) AS FISH_COUNT
FROM FISH_INFO
WHERE LENGTH IS NULL;

-- 가장 큰 물고기 10마리 구하기
SELECT ID, LENGTH
FROM FISH_INFO
ORDER BY LENGTH DESC, ID
LIMIT 10;

-- 특정 물고기를 잡은 총 수 구하기
SELECT COUNT(*) AS FISH_COUNT
FROM FISH_INFO I JOIN FISH_NAME_INFO N
ON I.FISH_TYPE = N.FISH_TYPE
WHERE N.FISH_NAME IN ('BASS', 'SNAPPER');

-- 대장균들의 자식의 수 구하기
SELECT O.ID ID, COUNT(E.ID) CHILD_COUNT
FROM ECOLI_DATA O
LEFT JOIN ECOLI_DATA E
ON O.ID = E.PARENT_ID
GROUP BY O.ID
ORDER BY O.ID;

-- 대장균의 크기에 따라 분류하기 1
SELECT ID, (CASE 
           WHEN SIZE_OF_COLONY <= 100
           THEN 'LOW'
           WHEN SIZE_OF_COLONY > 100 AND SIZE_OF_COLONY <= 1000
           THEN 'MEDIUM'
           WHEN SIZE_OF_COLONY > 1000
           THEN 'HIGH'
           END) SIZE
FROM ECOLI_DATA
ORDER BY 1;

-- 특정 형질을 가지는 대장균 찾기
SELECT COUNT(*) AS COUNT
FROM ECOLI_DATA
WHERE GENOTYPE & 2 = 0 AND GENOTYPE & 5 > 0;

-- 부모의 형질을 모두 가지는 대장균 찾기
SELECT o.ID ID, o.GENOTYPE GENOTYPE, p.GENOTYPE PARENT_GENOTYPE
FROM ECOLI_DATA o JOIN ECOLI_DATA p
ON o.PARENT_ID = p.ID
WHERE o.GENOTYPE & p.GENOTYPE = p.GENOTYPE
ORDER BY 1;

-- 대장균의 크기에 따라 분류하기 2
WITH ECOLI_CTE AS (
    SELECT ID, NTILE(4) OVER (ORDER BY SIZE_OF_COLONY DESC) AS COLONY_RANK
    FROM ECOLI_DATA
)

SELECT ID, 
(CASE
   WHEN COLONY_RANK = 1 THEN 'CRITICAL'
   WHEN COLONY_RANK = 2 THEN 'HIGH'
   WHEN COLONY_RANK = 3 THEN 'MEDIUM'
   ELSE 'LOW'
END) COLONY_NAME
FROM ECOLI_CTE 
ORDER BY ID;

-- 특정 세대의 대장균 찾기
SELECT third.ID
FROM ECOLI_DATA third 
JOIN ECOLI_DATA second
ON second.ID = third.PARENT_ID
JOIN ECOLI_DATA first
ON first.ID = second.PARENT_ID
WHERE first.PARENT_ID IS NULL;

-- 서울에 위치한 식당 목록 출력하기
SELECT i.REST_ID, i.REST_NAME, i.FOOD_TYPE, i.FAVORITES, i.ADDRESS, ROUND(AVG(r.REVIEW_SCORE), 2) SCORE
FROM REST_INFO i JOIN REST_REVIEW r
ON i.REST_ID = r.REST_ID
WHERE i.ADDRESS LIKE '서울%'
GROUP BY i.REST_ID
ORDER BY AVG(r.REVIEW_SCORE) DESC, FAVORITES DESC;

