-- 카테고리 별 도서 판매량 집계하기
SELECT CATEGORY, SUM(SALES) AS TOTAL_SALES
FROM BOOK b JOIN BOOK_SALES s
ON b.BOOK_ID = s.BOOK_ID
WHERE YEAR(s.SALES_DATE) = 2022 AND MONTH(s.SALES_DATE)= 1
GROUP BY CATEGORY
ORDER BY CATEGORY;

-- 대여 횟수가 많은 자동차들의 월별 대여 횟수 구하기
-- 정답 코드
WITH CTE AS (
    SELECT CAR_ID, SUM(YEAR(START_DATE) = 2022 AND MONTH(START_DATE) IN (8,9,10)) RESULT
    FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
    GROUP BY CAR_ID 
    HAVING RESULT >= 5 
)

SELECT 
MONTH(START_DATE) MONTH,	
CAR_ID,	
COUNT(*) RECORDS
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
WHERE (CAR_ID IN (SELECT CAR_ID 
                 FROM CTE))
      AND MONTH(START_DATE) BETWEEN 8 AND 10            
GROUP BY 1, 2
ORDER BY 1, 2 DESC

-- 고양이와 개는 몇 마리 있을까
SELECT ANIMAL_TYPE, COUNT(ANIMAL_ID) AS count
FROM ANIMAL_INS
WHERE ANIMAL_TYPE IN ('Cat', 'Dog')
GROUP BY ANIMAL_TYPE
ORDER BY ANIMAL_TYPE;

-- 위 문제 다른 풀이(아마도 문제 의도는 이거였을 거 같다)
SELECT ANIMAL_TYPE, COUNT(*) count
FROM ANIMAL_INS
GROUP BY ANIMAL_TYPE
HAVING ANIMAL_TYPE IN ('Cat', 'Dog')
ORDER BY ANIMAL_TYPE

-- 동명 동물 수 찾기
SELECT NAME, COUNT(NAME) AS COUNT
FROM ANIMAL_INS
GROUP BY NAME
HAVING COUNT(NAME) > 1
ORDER BY NAME;

-- 입양 시각 구하기(1)
SELECT HOUR(DATETIME) AS HOUR, COUNT(ANIMAL_ID) AS COUNT
FROM ANIMAL_OUTS
WHERE HOUR(DATETIME) BETWEEN 9 AND 19
GROUP BY HOUR(DATETIME)
ORDER BY 1;

-- 가격대 별 상품 개수 구하기
SELECT (FLOOR(PRICE / 10000) * 10000) AS PRICE_GROUP, COUNT(*) AS PRODUCTS
FROM PRODUCT
GROUP BY 1
ORDER BY 1;

-- 자동차 종류 별 특정 옵션이 포함된 자동차 수 구하기
SELECT CAR_TYPE, COUNT(*) AS CARS
FROM CAR_RENTAL_COMPANY_CAR
WHERE OPTIONS REGEXP '통풍시트|열선시트|가죽시트'
GROUP BY 1
ORDER BY 1;

-- 조건에 맞는 사원 정보 조회하기
SELECT SUM(g.SCORE) SCORE, e.EMP_NO, EMP_NAME, POSITION, EMAIl
FROM HR_EMPLOYEES e JOIN HR_GRADE g
ON e.EMP_NO = g.EMP_NO
GROUP BY e.EMP_NO
ORDER BY 1 DESC
LIMIT 1;

-- 노선별 평균 역 사이 거리 조회하기
SELECT ROUTE, CONCAT(ROUND(SUM(D_BETWEEN_DIST),1), 'km') AS TOTAL_DISTANCE, CONCAT(ROUND(AVG(D_BETWEEN_DIST),2), 'km') AS AVERAGE_DISTANCE
FROM SUBWAY_DISTANCE
GROUP BY ROUTE
ORDER BY SUM(D_BETWEEN_DIST) DESC;

-- 물고기 종류 별 잡은 수 구하기
SELECT COUNT(*) FISH_COUNT, n.FISH_NAME FISH_NAME
FROM FISH_INFO i JOIN FISH_NAME_INFO n
ON i.FISH_TYPE = n.FISH_TYPE
GROUP BY n.FISH_NAME
ORDER BY 1 DESC;

-- 월별 잡은 물고기 수 구하기
SELECT COUNT(*) FISH_COUNT, MONTH(TIME) MONTH
FROM FISH_INFO
GROUP BY MONTH(TIME)
ORDER BY 2;

-- 자동차 대여 기록에서 대여중 / 대여 가능 여부 구분하기
SELECT CAR_ID, (CASE WHEN (MAX('2022-10-16' BETWEEN START_DATE AND END_DATE) = 1)
               THEN '대여중'
               ELSE '대여 가능'
               END) AVAILABILITY
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
GROUP BY 1
ORDER BY 1 DESC;

-- 조건에 맞는 사용자와 총 거래금액 조회하기
SELECT u.USER_ID, u.NICKNAME, SUM(b.PRICE) TOTAL_SALES
FROM USED_GOODS_BOARD b JOIN USED_GOODS_USER u
ON b.WRITER_ID = u.USER_ID
WHERE b.STATUS='DONE'
GROUP BY b.WRITER_ID
HAVING SUM(b.PRICE) >= 700000
ORDER BY 3;

-- 부서별 평균 연봉 조회하기
SELECT d.DEPT_ID, d.DEPT_NAME_EN, ROUND(AVG(e.SAL), 0) AVG_SAL
FROM HR_DEPARTMENT d JOIN HR_EMPLOYEES e
ON d.DEPT_ID = e.DEPT_ID
GROUP BY DEPT_ID
ORDER BY AVG_SAL DESC;

-- 특정 조건을 만족하는 물고기별 수와 최대 길이 구하기
SELECT COUNT(*) FISH_COUNT, MAX(LENGTH) MAX_LENGTH, FISH_TYPE
FROM FISH_INFO
GROUP BY FISH_TYPE
HAVING AVG(IFNULL(LENGTH, 10)) >= 33
ORDER BY 3;

-- 저자 별 카테고리 별 매출액 집계하기
SELECT b.AUTHOR_ID, AUTHOR_NAME, CATEGORY, SUM(PRICE * SALES) TOTAL_SALES
FROM BOOK b JOIN AUTHOR a
ON b.AUTHOR_ID = a.AUTHOR_ID
JOIN BOOK_SALES s
ON b.BOOK_ID = s.BOOK_ID
WHERE DATE_FORMAT(SALES_DATE, '%Y-%m') = '2022-01'
GROUP BY 1, 3
ORDER BY 1, 3 DESC;

-- 식품분류별 가장 비싼 식품의 정보 조회하기
SELECT CATEGORY, MAX(PRICE) MAX_PRICE, PRODUCT_NAME
FROM FOOD_PRODUCT
WHERE CATEGORY IN ('과자', '국','김치','식용유') AND (CATEGORY, PRICE) IN (SELECT CATEGORY, MAX(PRICE) FROM FOOD_PRODUCT GROUP BY CATEGORY)
GROUP BY CATEGORY
ORDER BY 2 DESC;

-- CTE 사용방식
WITH CATEGORY_MAX AS (
    SELECT CATEGORY, MAX(PRICE) MAX_PRICE
    FROM FOOD_PRODUCT
    GROUP BY CATEGORY
)
SELECT P.CATEGORY, M.MAX_PRICE,	P.PRODUCT_NAME
FROM FOOD_PRODUCT P JOIN CATEGORY_MAX M 
ON P.CATEGORY = M.CATEGORY AND P.PRICE = M.MAX_PRICE
WHERE P.CATEGORY IN ('과자', '국', '김치', '식용유')
ORDER BY 2 DESC

-- 년, 월, 성별 별 상품 구매 회원 수 구하기
SELECT YEAR(SALES_DATE) YEAR, (MONTH(SALES_DATE)) MONTH, GENDER, COUNT(DISTINCT o.USER_ID) USERS
FROM USER_INFO i JOIN ONLINE_SALE o
ON i.USER_ID = o.USER_ID
WHERE GENDER IS NOT NULL
GROUP BY 1, 2, 3
ORDER BY 1, 2, 3;

-- 입양 시각 구하기(2)
WITH RECURSIVE CTE AS (
    SELECT 0 AS n
    
    UNION ALL
    
    SELECT n+1 FROM CTE
    WHERE n < 23 
)

SELECT c.n HOUR, IFNULL(COUNT(DISTINCT ANIMAL_ID), 0) COUNT
FROM  CTE c LEFT OUTER JOIN ANIMAL_OUTS o 
ON c.n = HOUR(o.DATETIME)
GROUP BY c.n
ORDER BY c.n;


-- 오프라인/온라인 판매 데이터 통합하기
WITH CTE AS (
SELECT DATE_FORMAT(SALES_DATE, '%Y-%m-%d') SALES_DATE, PRODUCT_ID, USER_ID, SALES_AMOUNT
FROM ONLINE_SALE
WHERE DATE_FORMAT(SALES_DATE, '%Y-%m') = '2022-03'
    
UNION ALL
    
SELECT DATE_FORMAT(SALES_DATE, '%Y-%m-%d') SALES_DATE, PRODUCT_ID, NULL AS USER_ID, SALES_AMOUNT
FROM OFFLINE_SALE
WHERE DATE_FORMAT(SALES_DATE, '%Y-%m') = '2022-03'
)

SELECT *
FROM CTE
ORDER BY 1, 2, 3;