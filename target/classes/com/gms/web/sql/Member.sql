create table BOARD(
    bno INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    content TEXT NULL,
    writer VARCHAR(50) NOT NULL,
    regdate TIMESTAMP NOT NULL DEFAULT now(),
    viewcnt INT DEFAULT 0,
    PRIMARY KEY (bno));
    
 insert into board(bno,title,content,writer,regdate,viewcnt) values(64,"망했다","머리가 많이 겁나아프구나","abc","2018-10-01",0);
    SELECT * FROM BOARD;
    SELECT * FROM BOARD;
    SHOW VARIABLES LIKE 'c%