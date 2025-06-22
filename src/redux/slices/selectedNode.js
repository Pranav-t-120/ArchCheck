import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedComponent : {}
};

export const selectedComponent = createSlice({
    name: 'selectedComponent',
    initialState,
    reducers: {
        selectedNode: (state, action) => {
            state.selectedComponent = action.payload;
        },
        remove: (state) =>{
            state.selectedComponent = {};
        },
    }
});

export const { selectedNode, remove } = selectedComponent.actions;
export default selectedComponent.reducer;