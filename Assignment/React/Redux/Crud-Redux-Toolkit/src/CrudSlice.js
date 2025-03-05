import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    userinfo:[]
}

const CrudSlice = createSlice({
    name:"crud",
    initialState,
    reducers:{
        add: (state, action)=>{
            const info = {
                id:nanoid(),
                name:action.payload.name,
                age:action.payload.age
            }
            state.userinfo.push(info)
        },
        del: (state, action)=>{
            state.userinfo = state.userinfo.filter((item)=>{
                return item.id!==action.payload
            })
        },
        upd: (state, action)=>{
            state.userinfo = state.userinfo.map((item)=>{
                if(item.id === action.payload.userId){
                    item = action.payload.data
                }
                return item
            })
        }
    }
})  

export const { add, del, upd }= CrudSlice.actions
export default CrudSlice.reducer

