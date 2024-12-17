import React, { useEffect} from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../redux/Slices/movieSlice'
import useMovieTrailer from '../../hooks/useMovieTrailer'

const VideoBackground = ({movieId}) => {
   
   const trailerVideo=useSelector(store=>store.movies?.trailerVideo);
    useMovieTrailer(movieId);
   //fetch trailer video is updating the store with trailer

 
  return (
    <div className='w-screen' >
      <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1"}  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground

// {
//     "id": 912649,
//     "results": [
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Who wouldn’t want to get paid to talk to themselves?!",
//         "key": "y1M-nGQblmw",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-10-29T16:30:13.000Z",
//         "id": "672241da82658aeeac92374d"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Snacks with the Venom cast? Say less 👀🔥",
//         "key": "BX2uhw9UOiQ",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-10-26T19:15:00.000Z",
//         "id": "672241c33ac0e6a07ccbb36e"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Venom: The Last Dance is only in cinemas NOW",
//         "key": "sZgZL6Yn2fw",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-10-25T17:30:07.000Z",
//         "id": "6722417e1df70f7920feccd2"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "POV: it's the UK premiere of your film.",
//         "key": "ZY34ufXPFl8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-10-25T17:15:03.000Z",
//         "id": "672241f528bd966c9e66fc7d"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "This is your sign to go and see Venom: The Last Dance on the big screen!",
//         "key": "Tujcuvurc1U",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-10-25T16:00:26.000Z",
//         "id": "672242461df70f7920fecd37"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "A VIP cutie patootie 🖤 Blue stole our hearts",
//         "key": "oAazxCOLF8c",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-10-25T10:15:02.000Z",
//         "id": "671ba06c27bd57d91f629487"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "London, it was a blast",
//         "key": "z5aYy3qktGg",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-10-25T09:30:31.000Z",
//         "id": "671ba0471ea33928297d285a"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official IMAX® Interview",
//         "key": "utiep_e9hnU",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-10-24T23:00:36.000Z",
//         "id": "671fbc1b427c5c19f0267d4d"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "He’s backkkk",
//         "key": "HcfFZwIg8cY",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-10-24T17:30:02.000Z",
//         "id": "671ba02d6e4210780f78f998"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Savor the Last Bite: The Venom Legacy",
//         "key": "4RT-yq4pb0E",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-10-21T16:01:28.000Z",
//         "id": "6716a88583bb33cf3e509089"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "HAAS x Venom",
//         "key": "5EyqQEiKeq4",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-10-21T03:42:04.000Z",
//         "id": "6716a36b4cfa2002eb289c41"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Austin Grand Prix Sizzle",
//         "key": "En9N-MltoqM",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-10-20T15:27:04.000Z",
//         "id": "6716a36383bb33cf3e508f86"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Hero",
//         "key": "ZAULZiKbJoU",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-10-18T16:03:23.000Z",
//         "id": "6712c22525c70b8b1d67e0f3"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Ahh with Megan Thee Stallion",
//         "key": "R3QCR4juFHQ",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-10-17T20:11:36.000Z",
//         "id": "6711e99a8e844657b7faf58e"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Venom's world incoming...",
//         "key": "O3wFg9z8WWI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-10-16T16:00:30.000Z",
//         "id": "671a69d89ff681d9e0a3d97b"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "In the Studio with Busta Rhymes",
//         "key": "aZTrRFHXz5A",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-10-04T22:01:28.000Z",
//         "id": "67014302fa3e69e0ef7cff88"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "In Cinemas Oct 23",
//         "key": "sm93tBNyz-g",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-10-04T12:30:59.000Z",
//         "id": "67014312e480149146856517"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "In Cinemas Oct 23",
//         "key": "xrpdt2tdvVY",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-10-04T12:15:05.000Z",
//         "id": "670142f567c6fb09fff846d6"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "In Cinemas Oct 23",
//         "key": "Gy9-A2WLHzs",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-10-04T12:00:16.000Z",
//         "id": "670142ecfa3e69e0ef7cff80"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "In Cinemas Oct 23",
//         "key": "dx4z9BY0Qm0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-10-04T11:45:03.000Z",
//         "id": "670142e2e48014914685650f"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "In Cinemas Oct 23",
//         "key": "Sy4sCnMnMEU",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-10-04T11:30:23.000Z",
//         "id": "670142d6e480149146856508"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "In Cinemas Oct 23",
//         "key": "drJHT245_W8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-10-04T11:15:03.000Z",
//         "id": "670142cefa3e69e0ef7cff71"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "In Cinemas Oct 23",
//         "key": "dZSqSfgG-Q8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-10-04T10:56:00.000Z",
//         "id": "670142c3e4801491468564ed"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Not That Kind of Cowboy with Dak Prescott",
//         "key": "HkBv-gjnXxQ",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-10-02T01:01:36.000Z",
//         "id": "66fca173348de1fabff22da4"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Eddie Pays Dana White a Visit",
//         "key": "jPPVqQGQW2g",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-09-15T00:30:33.000Z",
//         "id": "66e742dc9dfbbdf0e6cfaf97"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official IMAX® 1.90 Trailer",
//         "key": "FKBN1qAzW3s",
//         "site": "YouTube",
//         "size": 2160,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2024-09-12T13:03:32.000Z",
//         "id": "66f2a8110315b91f463b67f5"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Final Trailer",
//         "key": "HyIyd9joTTc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2024-09-12T12:59:42.000Z",
//         "id": "66e3061e0000000000b93ac0"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Trailer Countdown",
//         "key": "8dyO_MGWWME",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-09-08T22:30:01.000Z",
//         "id": "66df31e00b756450eb49be06"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer",
//         "key": "__2bjWbetsA",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2024-06-03T12:59:59.000Z",
//         "id": "665fac76ea9e3bd344ddb96f"
//       }
//     ]
//   }