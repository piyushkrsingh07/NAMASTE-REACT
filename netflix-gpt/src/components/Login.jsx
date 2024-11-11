import React, { useState,useRef } from 'react'
import Header from './Header'
import {checkValidData} from "../utils/validate"

const Login = () => {
    const[IsSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,seterrorMessage]=useState(null);



     const email=useRef(null);
     const password=useRef(null);
     const name=useRef(null);

    const handleButtonClick=()=>{
        //Validate the form data 
       
        // email.current.value referring to i/p box

       const message= checkValidData(email.current.value,password.current.value)
      seterrorMessage(message);
    }
   // to check what is there in input box we can use useRef hook
    const toggleSignInForm=()=>{
        setIsSignInForm(!IsSignInForm)
    }
  return (
    <div>
       <Header />
       <div className='absolute h-screen'>
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"  alt="" className='h-[600px] w-screen' />
      
       </div>
       <form onSubmit={(e)=>e.preventDefault()} className='w-[370px] absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85 mt-[100px]'>
       <h1 className='font-bold text-2xl py-4'>{IsSignInForm?"Sign In":"Sign Up"}</h1>
       {!IsSignInForm && (
        <input type="text" placeholder="Full Name" className='p-4 my-2 w-full bg-transparent border'/>
        )}
        <input type="text" 
        ref={email} placeholder="Email Address" className='p-4 my-2 w-full bg-transparent border'/>
{/* 
        help to get reference for input box */}
       
        <input type="password"
        ref={password} placeholder="Password" className='p-4 my-2 w-full bg-transparent border'/>

        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button className='px-2 py-auto my-2 bg-red-600 w-full rounded-lg h-9' onClick={handleButtonClick}>{IsSignInForm?"Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{IsSignInForm?"New to Netflix? Sign Up Now":"Already registered?Sign In Now"}</p>
        </form> 
    </div>

  )
}

export default Login
