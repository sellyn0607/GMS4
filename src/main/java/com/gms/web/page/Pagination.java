package com.gms.web.page;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.brd.BoardMapper;

import lombok.Data;
@Data
@Component @Lazy
public class Pagination implements Proxy{
	int pageNum,count,pageCount,rowCount,blockCount,pageSize,blockSize,beginPage,endPage,beginRow,endRow,prevBlock,nextBlock;
	boolean existPrev,existNext; 
	
	@Override
	public void carryOut(Map<?,?> m) {
		this.pageNum = (int)m.get("pageNo");
		this.pageSize = 5;
		this.blockSize = 5;
		this.rowCount = (int) m.get("count");
		this.pageCount = (rowCount%pageSize==0)? rowCount/pageSize : rowCount/pageSize+1;
		this.blockCount = (pageCount%blockSize==0)? pageCount/blockSize : pageCount/blockSize+1;
		this.beginRow = (pageNum-1)*pageSize +1;
		this.endRow = pageNum*pageSize;
		this.beginPage = pageNum - ((pageNum-1)%blockSize);
		this.endPage = ((beginPage + pageSize -1)<pageCount)? beginPage+blockSize-1 : pageCount;
		this.prevBlock = beginPage - blockSize;
		this.nextBlock = beginPage + blockSize;
		this.existPrev = (prevBlock >= 0);
		this.existNext = (nextBlock <= pageCount);
	}
}
