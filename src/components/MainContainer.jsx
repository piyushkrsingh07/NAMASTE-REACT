import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)
    if(!movies) return;

    const mainMovie=movies[0];
    console.log("dekho main movie");
    console.log(mainMovie)

    const{original_title,overview,id}=mainMovie
  return (
    <div className=''>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}



export default MainContainer



// const MainContainer()=>{

// }

// import React from 'react'

// const MainContainer = () => {
  // const movies=useSelector(store=>store.movies?.nowPlayingMovies)
  // if(!movies) return;

  //   const mainMovie=movies[0];
  //   console.log(mainMovie)
  // const {original_title,overview}=mainMovie;
//   return (
//     <div>
{/* <VideoTitle title={title} overview={overview}/>
<VideoBackground/> */}
      
//     </div>
//   )
// }

// export default MainContainer


