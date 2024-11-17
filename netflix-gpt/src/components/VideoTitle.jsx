import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className=' py-1 text-black bg-[#FDFEFF] w-[70px] px-auto font-semibold hover:bg-opacity-80'><div className='flex gap-1 items-center pl-3 pr-3'><FaPlay /> Play</div></button>
        <button className='bg-gray-500 mx-2 py-1 text-white w-[120px] px-auto bg-opacity-50  font-semibold '><div className='flex gap-1 items-center pl-3 pr-3'><IoIosInformationCircleOutline className='w-4 text-white '/>More Info</div></button>
      </div>
    </div>
  )
}

export default VideoTitle
