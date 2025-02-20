import React from 'react'
import Header from './Header'

import useNowPlayingMovies from '../../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../../hooks/usePopularMovies';
import useTrendingMovie from '../../hooks/useTrendingMovie';
import useUpcomingMovie from '../../hooks/useUpcomingMovies';
const Browse = () => {

   useNowPlayingMovies();
   usePopularMovies();
   useTrendingMovie();
   useUpcomingMovie();
  return (
    <div>
     <Header/>
     <MainContainer/>
     <SecondaryContainer/>

      {/* MainContainer
        -Video Container
        -VideoTitle
       Secondary Container 
       -Movie List */}

     </div>
  )
}

export default Browse
