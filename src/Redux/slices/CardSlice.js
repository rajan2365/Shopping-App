import { createSlice } from '@reduxjs/toolkit'

export const CardSlice =createSlice({
    name:"Card",
    initialState:[],
    reducers:{
        add:(state,action)=>{state.push(action.payload)},  //add element ke liye use krte hai!
        remove:(state,action)=>{return state.filter((item)=> item.id !==action.payload)}  //remove elemt ke liye
    }
})

export const{add,remove}=CardSlice.actions;
export default CardSlice.reducer;