import React, { useEffect } from 'react'
import { API_OPTIONS } from '../src/utils/constants'
import {  addUpcomingMovies } from '../src/redux/Slices/movieSlice'
import { useDispatch } from 'react-redux'

const useUpcomingMovie = () => {

    const dispatch=useDispatch()

    const getUpcomingMovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS)
        const json=await data.json();
        console.log("see trending movies",json)
       dispatch(addUpcomingMovies(json.results))
    }

    useEffect(()=>{
      getUpcomingMovies();
    },[])

   

}

export default useUpcomingMovie


