-- DML = Data Manipulation Language

-- Table에 new Tuple을 추가
INSERT INTO tablename (필드1, 필드2 필드3, ...) VALUES (값1, 값2, 값3;)
INSERT INTO tablename VALUES (값1, 값2, 값3;)

-- Table를 검색하는 기본 문장
SELECT 속성이름 FROM 테이블이름 WHERE 검색 조건;
SELECT 속성이름 FROM 테이블이름 WHERE 검색 조건 ORDER BY 속성 이름;

-- Table에서 특정 속성 값 수정
UPDATE 테이블명 SET 필드1 - 값1 WHERE 필드2 - 조건2;

-- Table에서 기존 Tuple플을 삭제
DELETE 테이블명 SET 필드1 - 값1 WHERE 필드2 - 조건2;

-- 중복된 데이터 제거
SELECT DISTINCT 속성이름,
FROM 테이블이름
WHERE 검색조건
ORDER BY 속성이름;

-- 속성이름끼리 그룹으로 묶는 역할
SELECT DISTINCT 속성이름,
FROM 테이블이름
WHERE 검색조건
GROUP BY 속성이름
-- GROUP BY 절과 결과를 나타내는 그룹을 제한
HAVING 조건식
ORDER BY 속성이름
LIMIT 갯수;

-- 두 Table을 묶어서 하나의 Table을 만듦
SELECT 속성이름,
FROM 테이블A, 테이블B
WHERE 조인조건 AND 검색조건;

SELECT 속성이름,
FROM 테이블A INNER JOIN 테이블B ON 조인조건
WHERE 검색조건;
