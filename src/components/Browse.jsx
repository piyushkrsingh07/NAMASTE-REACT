import React, { useEffect } from 'react'
import Header from './Header'

import useNowPlayingMovies from '../../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { API_OPTIONS } from '../utils/constants';
const Browse = () => {


  // const getNowPlayingMovies=async()=>{
  //   const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS)
  //   const json=await data.json();
  //   console.log("dekh api call")
  //   console.log(json)
  // };
  // useEffect(()=>{
  //   getNowPlayingMovies();
  // },[])
   useNowPlayingMovies();

  return (
    <div >
     <Header/>
     <MainContainer/>
     <SecondaryContainer/>

      {/* MainContainer
        -Video Container
        -VideoTitle
       Secondary Container 
       -Movie List *n
         -Cards*n   */}

     </div>
  )
}

export default Browse
