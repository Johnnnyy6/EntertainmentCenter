import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Trending() {

    const [content, setContent] = useState([]);

    const fetchTrending = async() => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);

            setContent(data.results);
    };


    useEffect(() => {
        fetchTrending();
    }, [])
    
  return (
    <div>
        <span className='pagesTitle'>Trending</span>
        <div className='trending'>
            {
                content && content.map((c) =>(
                    console.log(c)
                ))
            }
        </div>
    </div>
  )
}
