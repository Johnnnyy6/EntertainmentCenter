import { Pagination } from '@mui/material'
import React from 'react'
import './CustomPagination.css';

export default function CustomPagination({setPage,numOfPages = 10}) {

  const handlePageChange = (page) => {
      setPage(page);
      window.scroll(0,0);
  };

  return (
    <div className='pagination' >
        <Pagination count = {numOfPages} color="primary" 
        onChange={(e) => handlePageChange(e.target.textContent)}
        hideNextButton
        hidePrevButton
        />
    </div>
  );
};
