SHOW databases;

-- 데이터 베이스 생성하는 명령어    
CREATE DATABASE db_sql DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;

-- 데이터 베이스 선택하는 명령어
use db_sql;

-- 테이블을 생성하는 명령어
create table db_ddl_sql(
	id int primary key not null,
	password varchar(20) not null,
	age int unsigned
);

-- 속성 새로 추가하는 경우
ALTER TABLE db_ddl_sql ADD  gender ENUM('남자', '여자', '외계인') not null;
-- 기존 속성 삭제하는 경우
ALTER TABLE db_ddl_sql DROP COLUMN age;
-- 기존 속성 수정하는 경우
ALTER TABLE db_ddl_sql MODIFY gender VARCHAR(2) 

-- TABLE을 삭제하는 명령어
DROP TABLE db_ddl_sql;

-- table을 조회하는 명령어
show tables;