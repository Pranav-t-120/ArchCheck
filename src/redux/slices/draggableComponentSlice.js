import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    components : []
};

export const draggableComponentSlice = createSlice({
    name: 'draggableComponentSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            state.components.push(action.payload);
        },
        remove: (state,action) =>{
            state.components = state.components.filter(item => item.id != action.payload);
        
        },
        // update x and y position of the node
        update: (state, action) => {
            const { id, x, y } = action.payload;
            const existingNode = state.components.find(item => item.id === id);
            if (existingNode) {
                existingNode.position = { x, y };
            }
        }   
    }
});

export const { add, remove, update } = draggableComponentSlice.actions;
export default draggableComponentSlice.reducer;