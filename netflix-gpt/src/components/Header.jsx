import React from 'react'
import {signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {auth} from "../utils/firebase"
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from '../redux/Slices/userSlice';
import { useEffect } from 'react';
import { LOGO } from '../utils/constants';
const Header = () => {
   const dispatch=useDispatch()
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
const handleSignOut=()=>{
  signOut(auth).then(() => {
// navigate("/");
  }).catch((error) => {
  navigate("/error");
  });
  
}
useEffect(()=>{
  const unsubscibe=onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({
        uid:uid,
        email:email,
        displayName:displayName,
        photoURL:photoURL,
      })
    );
      //store m dalne k lye add user to store
      // ...
  navigate("/browse")
    } else {
      // User is signed out
      // ...
      dispatch(removeUser());
      navigate("/")
  
    }
  });
//Unsubscribe when component unmount
  return ()=>unsubscibe();
},[])
//hrr brr auth check hoga
//aese header k andr dlla jo hmesa available
//component unmount unsubscribe


  return (
    <div className='absolute w-screen px-8  bg-gradient-to-b from-black z-10  flex justify-between '>
      <img
      className='w-40 h-16'
      src={LOGO}
      alt="LOGO"
      
      />
      {user && (<div className='flex p-2'>
        <img 
        className='w-12 h-12 '
        src={user?.photoURL} alt="" />
     
      <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out) </button>
      </div>
      )}
    </div>
  )
}

export default Header
