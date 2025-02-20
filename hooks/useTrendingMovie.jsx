import React, { useEffect } from 'react'
import { API_OPTIONS } from '../src/utils/constants'
import { addTrendingMovies } from '../src/redux/Slices/movieSlice'
import { useDispatch } from 'react-redux'

const useTrendingMovie = () => {

    const dispatch=useDispatch()

    const getTrendingMovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS)
        const json=await data.json();
        console.log("see trending movies",json)
       dispatch(addTrendingMovies(json.results))
    }

    useEffect(()=>{
      getTrendingMovies();
    },[])

   

}

export default useTrendingMovie


