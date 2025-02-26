import { configureStore } from "@reduxjs/toolkit";
import AssesmentSlice from './AssesmentSlice'

const store = configureStore({
    reducer:AssesmentSlice
})

export default store