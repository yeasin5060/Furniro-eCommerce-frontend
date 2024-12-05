import { configureStore } from "@reduxjs/toolkit";
import singleProductSlice  from "./singleProductSlice"; // Import the default reducer

export const store = configureStore({
  reducer: {
    // Add the RTK Query API slice
    //[furniroeCom.reducerPath]: furniroeCom.reducer,

    // Add the single product reducer
    singleProduct: singleProductSlice
  },
  // Adding middleware for caching, invalidation, and RTK Query features
 /* middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(furniroeCom.middleware),*/
});
