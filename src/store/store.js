import { configureStore } from "@reduxjs/toolkit";
// import authService from "../store/authSlice";
import authSlice from "../store/authSlice";

const store = configureStore({
    reducer : {
        // auth : authService,
        auth : authSlice,
        // post : postSlice, // Todo :: `
    }
});

export default store;


