import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Slices/userSlice";
import { useReducer } from "react";



 export const store=configureStore({
    reducer:{
        user:userSlice.reducer
    }
    //it contain different reducer from different slices
})
