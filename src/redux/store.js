// configure redux store
import { configureStore } from '@reduxjs/toolkit';
import draggableComponentReducer from './slices/draggableComponentSlice';
import draggableComponentEdgeReducer, { draggableComponentEdge } from './slices/draggableComponentEdge';
import selectedComponentReducer  from './slices/selectedNode';

const store = configureStore({
  reducer: {
    draggableComponent: draggableComponentReducer,
    draggableComponentEdge: draggableComponentEdgeReducer,
    selectedComponent: selectedComponentReducer,
  },
});

export default store;
