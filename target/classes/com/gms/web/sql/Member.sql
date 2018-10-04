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
    SHOW VARIABLES LIKE 'c%'
    
    create table point(potin_seq int primary key,all_point int,mbr_point int , userid varchar(20));
    insert into point(userid) values('abc') where point_seq = 1;
    
 
    alter table board add column replycnt int default 0;
    update point set all_point=all_point-30 where userid='abc';