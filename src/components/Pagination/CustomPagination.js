import Pagination from "@material-ui/lab/Pagination";
import React from 'react'
import './CustomPagination.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function CustomPagination({setPage,numOfPages = 10}) {

  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

  const handlePageChange = (page) => {
      setPage(page);
      window.scroll(0,0);
  };

  return (
    <div className='pagination' >
      <ThemeProvider theme = {darkTheme}>
        <Pagination count = {numOfPages} color="primary" 
        onChange={(e) => handlePageChange(e.target.textContent)}
        hideNextButton
        hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
};
