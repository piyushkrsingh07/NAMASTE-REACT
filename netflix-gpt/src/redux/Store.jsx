import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Slices/userSlice";

import { movieSlice } from "./Slices/movieSlice";




 export const store=configureStore({
    reducer:{
        user:userSlice.reducer,
        movies:movieSlice.reducer,
    }
    //it contain different reducer from different slices
})
