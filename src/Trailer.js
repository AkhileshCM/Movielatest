import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
function Trailer(props) {
    const loca=useLocation();
    const name=loca.state;
    console.log(name)
    const options = {
        method: 'GET',
        url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
        params: {
          q: 'crocodile dundee'
        },
        headers: {
          'X-RapidAPI-Key': '0dfb88f4d8msh722c74baa756a2ep1a9abbjsneb3bc1cddcdc',
          'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
        }
      };
      
      
      const [video,setvideo]=useState({})
      const [link,setlink]=useState("")
      
      
      useEffect(()=>{
        options.params.q=name;
          axios.request(options)
          .then(res=>{
            setvideo(res.data.videos);
            setlink(video[0]["link"])
            

              
          })
      },[])
      console.log(link)
    
    return (
        <div>
            <iframe width="420" height="315"
src={link}>
</iframe>
        </div>
    )
}

export default Trailer;