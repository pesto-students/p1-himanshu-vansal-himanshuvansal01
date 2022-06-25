import { configureStore } from '@reduxjs/toolkit'
import FlipReducer from "../Reducer/FlipReducer"

const  store = configureStore({reducer : FlipReducer});

export default store;