import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const[IsSignInForm,setIsSignInForm]=useState(true);

    const toggleSignInForm=()=>{
        setIsSignInForm(!IsSignInForm)
    }
  return (
    <div>
       <Header />
       <div className='absolute h-screen'>
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"  alt="" />
      
       </div>
       <form className='w-[370px] absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85 mt-[100px]'>
       <h1 className='font-bold text-2xl py-4'>{IsSignInForm?"Sign In":"Sign Up"}</h1>
       {!IsSignInForm && (
        <input type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-transparent border'/>
        )}
        <input type="text" placeholder="Email Address" className='p-4 my-4 w-full bg-transparent border'/>
       
        <input type="password" placeholder="Password" className='p-4 my-4 w-full bg-transparent border'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{IsSignInForm?"Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{IsSignInForm?"New to Netflix? Sign Up Now":"Already registered?Sign In Now"}</p>
        </form> 
    </div>

  )
}

export default Login
