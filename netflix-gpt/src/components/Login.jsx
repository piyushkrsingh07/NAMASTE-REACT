import React, { useState,useRef } from 'react'
import Header from './Header'
import {checkValidData} from "../utils/validate"
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../utils/firebase"
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/Slices/userSlice';
import { updateProfile } from 'firebase/auth';
import {  LOGO, USER_AVATAR } from '../utils/constants';

const Login = () => {
    const[IsSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,seterrorMessage]=useState(null);
    // const navigate=useNavigate();
    // const user=useSelector(store => store.user)

    const dispatch=useDispatch();


     const email=useRef(null);
     const password=useRef(null);
     const name=useRef(null);

    const handleButtonClick=()=>{
        //Validate the form data 
       
        // email.current.value referring to i/p box

       const message= checkValidData(email.current.value,password.current.value)
      seterrorMessage(message);

      if(message) return;

      if(!IsSignInForm){
        //sign up logic
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL:LOGO
    })
    
    .then(() => {
      // Profile updated!
      // ...
     
        const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(
          addUser({
            uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL,
          })
        );






     

     
    })
    .catch((error) => {
      // An error occurred
      // ...
      seterrorMessage(error.message)
    });
    
    // ...
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+ "-" + errorMessage);
    // ..
  });
      }
      else{
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          console.log(user)
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode+ "-" + errorMessage);
        });

      }
    }
   // to check what is there in input box we can use useRef hook
    const toggleSignInForm=()=>{
        setIsSignInForm(!IsSignInForm)
    }
  return (
    <div >
       <Header />
       <div className='absolute h-screen w-screen overflow-hidden'>
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"  alt="" className='h-screen w-screen overflow-x-hidden' />
      
       </div>
       <form onSubmit={(e)=>e.preventDefault()} className='w-[370px] absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85 mt-[73px]'>
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
