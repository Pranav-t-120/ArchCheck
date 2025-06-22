import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    edges : []
};

export const draggableComponentEdge = createSlice({
    name: 'draggableComponentEdge',
    initialState,
    reducers: {
        addEdge: (state, action) => {
            state.edges.push(action.payload);
        },
        removeEdge: (state,action) =>{
            state.edges = state.edges.filter(item => item.id != action.payload);

        },
    }
});

export const { addEdge, removeEdge } = draggableComponentEdge.actions;
export default draggableComponentEdge.reducer;