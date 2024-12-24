import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../src/utils/constants";
import { addTrailerVideo } from "../src/redux/Slices/movieSlice";
import { useEffect } from "react";






const useMovieTrailer=(movieId)=>{


    
    const dispatch=useDispatch();
    


    // const getMovieVideos=async()=>{
    //     const data=await fetch('https://api.themoviedb.org/3/movie/' +
    //         movieId +
    //         '/videos?language=en-US',API_OPTIONS)
    //     // const data=await fetch('https://api.themoviedb.org/3/movie/912649/videos?language=en-US',API_OPTIONS)
    //     //phle movieid hard coded tha
    //     const json=await data.json();
    //     console.log(json)

    //     const filterData=json.results.filter(video=>video.type === "Trailer")
       
    //     const trailer=filterData.length?filterData[0]:json.results[0];
    //     //agr trailer exist nhi krta ho
    //     console.log(trailer);
    //    dispatch(addTrailerVideo(trailer));
    // }
    // useEffect(()=>{
    //   getMovieVideos()
    // },[])

       const getMovieVideos=async()=>{
        // const data=await fetch('https://api.themoviedb.org/3/movie/845781/videos?language=en-US',API_OPTIONS)

        //previously movie id was looking ugly
        const data=await fetch('https://api.themoviedb.org/3/movie/' +
                movieId +
         '/videos?language=en-US',API_OPTIONS)
        const json=await data.json();
        console.log("see videos associated")
        console.log(json);
    
        const filterData=json.results.filter(video => video.type==="Trailer")
       const trailer=filterData.length?filterData[0]:json.results[0];
       console.log("dekho trailer")
       console.log(trailer)
     
    
       dispatch(addTrailerVideo(trailer))
        }
        
        useEffect(()=>{
        getMovieVideos();
        },[])
}
export default useMovieTrailer

//yeh video background se aaya h
//yha isne store m data dll dia

