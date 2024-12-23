-- 평균 일일 대여 요금 구하기
SELECT ROUND(AVG(DAILY_FEE), 0) AS AVERAGE_FEE FROM CAR_RENTAL_COMPANY_CAR WHERE CAR_TYPE = 'SUV';

-- 흉부외과 또는 일반외과 의사 목록 출력하기
SELECT DR_NAME, DR_ID, MCDP_CD, DATE_FORMAT(HIRE_YMD, '%Y-%m-%d') AS HIRE_YMD
FROM DOCTOR
WHERE MCDP_CD IN ('CS', 'GS')
ORDER BY HIRE_YMD DESC, DR_NAME;

-- 상품 별 오프라인 매출 구하기
SELECT p.PRODUCT_CODE AS PRODUCT_CODE, SUM(o.SALES_AMOUNT * p.PRICE) AS SALES
FROM PRODUCT p JOIN OFFLINE_SALE o
ON p.PRODUCT_ID = o.PRODUCT_ID
GROUP BY p.PRODUCT_CODE
ORDER BY 2 DESC, 1;

-- 조건에 맞는 도서와 저자 리스트 출력하기
SELECT BOOK_ID, AUTHOR_NAME, DATE_FORMAT(PUBLISHED_DATE, '%Y-%m-%d') AS PUBLISHED_DATE
FROM BOOK b JOIN AUTHOR a
ON b.AUTHOR_ID = a.AUTHOR_ID
WHERE CATEGORY = '경제'
ORDER BY 3;

-- 없어진 기록 찾기
SELECT o.ANIMAL_ID, o.NAME
FROM ANIMAL_OUTS o LEFT JOIN ANIMAL_INS i
ON o.ANIMAL_ID = i.ANIMAL_ID
WHERE i.ANIMAL_ID IS NULL
ORDER BY 1;

-- 있었는데요 없었습니다
SELECT i.ANIMAL_ID, i.NAME
FROM ANIMAL_INS i JOIN ANIMAL_OUTS o
ON i.ANIMAL_ID = o.ANIMAL_ID
WHERE i.DATETIME > o.DATETIME
ORDER BY i.DATETIME;

-- 오랜 기간 보호한 동물(1)
SELECT i.NAME, i.DATETIME
FROM ANIMAL_INS i LEFT JOIN ANIMAL_OUTS o
ON i.ANIMAL_ID = o.ANIMAL_ID
WHERE o.DATETIME IS NULL
ORDER BY i.DATETIME
LIMIT 3;

-- 5월 식품들의 총매출 조회하기
SELECT p.PRODUCT_ID, PRODUCT_NAME, SUM(AMOUNT)*PRICE TOTAL_SALES
FROM FOOD_PRODUCT p JOIN FOOD_ORDER o
ON p.PRODUCT_ID = o.PRODUCT_ID
WHERE o.PRODUCE_DATE LIKE '2022-05-%'
GROUP BY p.PRODUCT_ID
ORDER BY 3 DESC, 1;

-- 주문량이 많은 아이스크림들 조회하기
SELECT FLAVOR
FROM (SELECT h.FLAVOR, SUM(h.TOTAL_ORDER) + SUM(j.TOTAL_ORDER) RESULT
      FROM FIRST_HALF h JOIN JULY j
      ON h.FLAVOR = j.FLAVOR
      GROUP BY h.FLAVOR
     ORDER BY 2 DESC 
     LIMIT 3) tmp;

-- 보호소에서 중성화한 동물
SELECT i.ANIMAL_ID, i.ANIMAL_TYPE, i.NAME
FROM ANIMAL_INS i JOIN ANIMAL_OUTS o
ON i.ANIMAL_ID = o.ANIMAL_ID
WHERE i.SEX_UPON_INTAKE LIKE '%Intact%' AND (o.SEX_UPON_OUTCOME LIKE '%Spayed%' OR o.SEX_UPON_OUTCOME LIKE '%Neutered%')
ORDER BY 1;

--REGEXP 쓰면 더 간단하다!
SELECT I.ANIMAL_ID,	I.ANIMAL_TYPE,	I.NAME
FROM ANIMAL_INS I JOIN ANIMAL_OUTS O 
ON I.ANIMAL_ID = O.ANIMAL_ID
WHERE I.SEX_UPON_INTAKE REGEXP 'Intact' AND
      O.SEX_UPON_OUTCOME REGEXP 'Spayed|Neutered'
ORDER BY  1

-- 상품을 구매한 회원 비율 구하기
SELECT YEAR(SALES_DATE) YEAR, 
  MONTH(SALES_DATE) MONTH, COUNT(DISTINCT o.USER_ID) PURCHASED_USERS, 
  ROUND(COUNT(DISTINCT o.USER_ID) / (SELECT COUNT(DISTINCT USER_ID) FROM USER_INFO WHERE YEAR(JOINED) = 2021), 1) PURCHASED_RATIO
FROM ONLINE_SALE o 
JOIN USER_INFO i
ON o.USER_ID = i.USER_ID
WHERE YEAR(i.JOINED) = 2021
GROUP BY 1, 2
ORDER BY 1, 2;

-- CTE 활용

WITH USER_JOIN_2021 AS ( -- 2021 가입한 전체 회원 수
    SELECT COUNT(*) COUNT
    FROM USER_INFO
    WHERE YEAR(JOINED) = 2021
),
USER_2021 AS ( -- 2021 가입한 회원 목록 
    SELECT USER_ID
    FROM USER_INFO
    WHERE YEAR(JOINED) = 2021
)
SELECT YEAR(SALES_DATE) YEAR, MONTH(SALES_DATE) MONTH, 
COUNT(DISTINCT USER_ID) PURCHASED_USERS, -- 구매한 회원수 
ROUND((COUNT(DISTINCT USER_ID) / (SELECT * FROM USER_JOIN_2021)), 1) PURCHASED_RATIO 
FROM ONLINE_SALE
WHERE USER_ID IN (SELECT * FROM USER_2021) -- 2021 가입한 회원들 필터링 
GROUP BY 1, 2
ORDER BY 1, 2 

-- CTE 활용 2
WITH TOTAL_USER AS (SELECT * FROM USER_INFO WHERE YEAR(JOINED) = 2021)

SELECT YEAR(OS.SALES_DATE) YEAR, MONTH(OS.SALES_DATE) MONTH, COUNT(DISTINCT UI.USER_ID) PURCHASED_USERS, ROUND(COUNT(DISTINCT UI.USER_ID) / (SELECT COUNT(*) FROM TOTAL_USER), 1) PUCHASED_RATIO
FROM USER_INFO UI
JOIN ONLINE_SALE OS
ON UI.USER_ID = OS.USER_ID

WHERE YEAR(UI.JOINED) = 2021
GROUP BY 1, 2
ORDER BY 1, 2

-- FrontEnd 개발자 찾기
WITH CTE AS (SELECT CODE
        FROM SKILLCODES
        WHERE CATEGORY='Front End')

SELECT DISTINCT ID, EMAIL, FIRST_NAME, LAST_NAME
FROM DEVELOPERS d JOIN CTE c
ON (d.SKILL_CODE & c.CODE) > 0
ORDER BY 1;

-- 취소되지 않은 진료 예약 조회하기
SELECT APNT_NO, p.PT_NAME, ap.PT_NO, ap.MCDP_CD, DR_NAME, APNT_YMD
FROM APPOINTMENT ap JOIN PATIENT p
ON ap.PT_NO = p.PT_NO
JOIN DOCTOR d
ON ap.MDDR_ID = d.DR_ID
WHERE ap.MCDP_CD = 'CS' AND APNT_CNCL_YN = 'N' AND DATE_FORMAT(APNT_YMD, '%Y-%m-%d') = '2022-04-13'
ORDER BY APNT_YMD;