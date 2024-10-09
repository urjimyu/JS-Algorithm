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

