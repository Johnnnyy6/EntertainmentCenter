import React from 'react'
import "./header.css";
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';


export default function Header() {
  return (
    <div className="header">
      <MovieFilterOutlinedIcon className="icon" fontSize='large'/>
      <span onClick={() => window.scroll(0,0)}>Entertainment Center</span>
      <TheatersOutlinedIcon className= "iconRight" fontSize='large'/>
    </div>
  )
}
