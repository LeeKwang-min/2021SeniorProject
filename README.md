# 2021SeniorProject

``` MySQL
--
-- 1. 유저 정보 테이블
--

CREATE TABLE user (
  id int(11) NOT NULL AUTO_INCREMENT,
  id varchar(20) NOT NULL,
  pw varchar(20) NOT NULL,
  PRIMARY KEY (id)
);


--
-- 2. 소설 정보 테이블
--

CREATE TABLE novel (
  id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(30) NOT NULL,
  imgurl varchar(150) DEFAULT NULL,
  genre varchar(30) DEFAULT NULL,
  description text,
  author_id int(11) DEFAULT NULL,
  PRIMARY KEY (id)
);

--
-- 3. 작가 정보 테이블
--

CREATE TABLE author (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  profile varchar(200) DEFAULT NULL,
  PRIMARY KEY (id)
);

--
-- 4. 호감도 정보 테이블
--

CREATE TABLE likenovel (
  uid int(11) NOT NULL,
  nid int(11) NOT NULL,
  score float(1,1) NOT NULL,
);

--
-- 5. 찜목록 정보 테이블
--

CREATE TABLE wishlist (
  uid int(11) NOT NULL,
  nid int(11) NOT NULL,
);
```