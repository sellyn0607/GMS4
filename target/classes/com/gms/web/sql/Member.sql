create table BOARD(
    bno INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    content TEXT NULL,
    writer VARCHAR(50) NOT NULL,
    regdate TIMESTAMP NOT NULL DEFAULT now(),
    viewcnt INT DEFAULT 0,
    PRIMARY KEY (bno));
    
 insert into board(bno,title,content,writer,regdate,viewcnt) values(63,"아무거나!","머리가 많이 개아프구나","Cost","2018-09-28",0);
    SELECT * FROM BOARD;
    SELECT * FROM BOARD;
    SHOW VARIABLES LIKE 'c%