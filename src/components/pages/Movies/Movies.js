import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Movies() {

  const[page,setPage] = useState(1);

  const fetchMovies = async() => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
  };

  useEffect(() =>{
    fetchMovies();
  },[]);

  return (
    <div>
        <span className='pagesTitle'>Movies</span>

    </div>
  )
}
