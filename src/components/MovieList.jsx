import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {

    

// console.log("dekho jo film aaya hai",movies)
const filteredMovies=movies?.filter(movie=>movie.title!=="Death Whisperer 2")

  return (
    <div className='px-6  '>
         <h1 className='text-3xl py-2 text-white'>{title}</h1>
        <div className='flex  overflow-x-scroll no-scrollbar'>
           
            <div className='flex  '>
       {filteredMovies?.map((movie)=>(
        <MovieCard key={movie.id} posterPath={movie.poster_path}/>
       ))}
    
  
         
            </div>
        </div>
      
    </div>
  )
}

export default MovieList
