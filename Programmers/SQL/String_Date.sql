-- 자동차 평균 대여 기간 구하기
SELECT CAR_ID, ROUND(AVG(DATEDIFF(END_DATE,START_DATE)+1), 1) AS AVERAGE_DURATION
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
GROUP BY CAR_ID
HAVING AVERAGE_DURATION >= 7
ORDER BY 2 DESC, 1 DESC;

-- 조건에 부합하는 중고거래 상태 조회하기
SELECT BOARD_ID, WRITER_ID, TITLE, PRICE, (CASE
                                          WHEN STATUS='SALE'
                                          THEN '판매중'
                                          WHEN STATUS='RESERVED'
                                          THEN '예약중'
                                          WHEN STATUS='DONE'
                                          THEN '거래완료'
                                          END)AS STATUS
FROM USED_GOODS_BOARD
WHERE DATE_FORMAT(CREATED_DATE, '%Y-%m-%d') = '2022-10-05'
ORDER BY BOARD_ID DESC;

-- 루시와 엘라 찾기
SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
WHERE NAME IN ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty')
ORDER BY ANIMAL_ID;

-- 이름에 el이 들어가는 동물 찾기
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE NAME LIKE '%EL%' AND ANIMAL_TYPE = 'Dog'
ORDER BY NAME;

-- 중성화 여부 파악하기
SELECT ANIMAL_ID, NAME, (CASE
                        WHEN SEX_UPON_INTAKE LIKE ('%Neutered%') OR SEX_UPON_INTAKE LIKE ('%Spayed%')
                        THEN 'O'
                        ELSE 'X'
                        END) AS 중성화
FROM ANIMAL_INS
ORDER BY 1;

-- 카테고리 별 상품 개수 구하기
SELECT SUBSTR(PRODUCT_CODE, 1, 2) AS CATEGORY, COUNT(*) AS PRODUCTS
FROM PRODUCT
GROUP BY SUBSTR(PRODUCT_CODE, 1, 2)
ORDER BY 1;

-- DATETIME에서 DATE로 형 변환
SELECT ANIMAL_ID, NAME, DATE_FORMAT(DATETIME, '%Y-%m-%d') AS '날짜'
FROM ANIMAL_INS
ORDER BY 1;

-- 연도 별 평균 미세먼지 농도 조회하기
SELECT YEAR(YM) AS YEAR, ROUND(AVG(PM_VAL1), 2) AS PM10, ROUND(AVG(PM_VAL2),2) AS `PM2.5`
FROM AIR_POLLUTION
WHERE LOCATION2='수원'
GROUP BY 1
ORDER BY 1;

-- 분기별 분화된 대장균의 개체 수 구하기
SELECT (CASE WHEN MONTH(DIFFERENTIATION_DATE) IN (1,2,3)
        THEN '1Q'
        WHEN MONTH(DIFFERENTIATION_DATE) IN (4,5,6)
        THEN '2Q'
        WHEN MONTH(DIFFERENTIATION_DATE) IN (7,8,9)
        THEN '3Q'
        ELSE '4Q'
        END
       ) QUARTER, COUNT(*) AS ECOLI_COUNT
FROM ECOLI_DATA
GROUP BY 1
ORDER BY 1;

-- 조회수가 가장 많은 중고거래 게시판의 첨부파일 조회하기
SELECT CONCAT('/home/grep/src/', b.BOARD_ID, '/', f.FILE_ID, f.FILE_NAME, f.FILE_EXT) AS FILE_PATH
FROM USED_GOODS_BOARD b JOIN USED_GOODS_FILE f
ON b.BOARD_ID = f.BOARD_ID
WHERE b.VIEWS = (SELECT MAX(VIEWS) FROM USED_GOODS_BOARD)
ORDER BY f.FILE_ID DESC;

-- 조건별로 분류하여 주문상태 출력하기
SELECT ORDER_ID, PRODUCT_ID, DATE_FORMAT(OUT_DATE, '%Y-%m-%d') OUT_DATE, (CASE 
                                        WHEN OUT_DATE <= '2022-05-01'
                                       THEN '출고완료'
                                        WHEN OUT_DATE > '2022-05-01'
                                        THEN '출고대기'
                                       ELSE '출고미정'
                                        END
                                       ) '출고여부'
FROM FOOD_ORDER
ORDER BY 1;

-- 대여 기록이 존재하는 자동차 리스트 구하기
SELECT DISTINCT c.CAR_ID
FROM CAR_RENTAL_COMPANY_CAR c JOIN CAR_RENTAL_COMPANY_RENTAL_HISTORY h
ON c.CAR_ID = h.CAR_ID
WHERE c.CAR_TYPE = '세단' AND MONTH(h.START_DATE) = 10
ORDER BY 1 DESC;

-- 조건에 맞는 사용자 정보 조회하기 풀이 1
WITH CTE AS (
    SELECT WRITER_ID, COUNT(BOARD_ID) ACC
             FROM USED_GOODS_BOARD
             GROUP BY WRITER_ID
            HAVING COUNT(BOARD_ID) >= 3
)

-- 조건에 맞는 사용자 정보 조회하기 풀이 2
SELECT USER_ID, NICKNAME, CONCAT_WS(' ',CITY, STREET_ADDRESS1, STREET_ADDRESS2) 전체주소, CONCAT_WS('-', SUBSTRING(TLNO, 1, 3), SUBSTRING(TLNO, 4, 4), SUBSTRING(TLNO, 8, 4)) 전화번호
FROM CTE c JOIN USED_GOODS_USER u
ON c.WRITER_ID = u.USER_ID
ORDER BY 1 DESC;

WITH CTE AS (
    SELECT WRITER_ID, COUNT(BOARD_ID) AS ACC
             FROM USED_GOODS_BOARD
             GROUP BY WRITER_ID
)

SELECT USER_ID, NICKNAME, CONCAT_WS(' ',CITY, STREET_ADDRESS1, STREET_ADDRESS2) '전체주소', CONCAT_WS('-', SUBSTRING(TLNO, 1, 3), SUBSTRING(TLNO, 4, 4), SUBSTRING(TLNO, 8, 4)) '전화번호'
FROM CTE c JOIN USED_GOODS_USER u
ON c.WRITER_ID = u.USER_ID
WHERE c.ACC >=3
ORDER BY 1 DESC;

