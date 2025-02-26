import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    citizen: false,
    age:false
}

const AssesmentSlice = createSlice({
    name:"AssesmentSlice",
    initialState,
    reducers:{
        checkCitizen: (state, action)=>{
            state.citizen = action.payload
        },
        checkAge: (state, action)=>{
            state.age = action.payload
        }
    }
})

export const { checkCitizen, checkAge } = AssesmentSlice.actions

export default AssesmentSlice.reducer