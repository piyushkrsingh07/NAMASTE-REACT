import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-gray-500 py-1 text-white w-[70px] px-auto bg-opacity-50 rounded-lg'>Play</button>
        <button className='bg-gray-500 mx-2 py-1 text-white w-[100px] px-auto bg-opacity-50 rounded-lg '>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
