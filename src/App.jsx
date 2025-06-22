import { useState } from 'react';
import Editor from './components/editor/editor';
import Sidebar from './components/sidebar/sidebar';
import RightSideBar from './components/rightSideBar/rightSideBar';
import store from './redux/store';
import { Provider } from 'react-redux';

import './App.css'
import { DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ReactFlowProvider } from '@xyflow/react';

function App() {
  return (
    <ReactFlowProvider>
      <DndProvider backend={HTML5Backend}>
        <Provider store={store}>
          <div className='grid grid-cols-12 bg-black' style={{ height: "100vh" }}>
            <Sidebar />
            <Editor />
            <RightSideBar />
          </div>
        </Provider>
      </DndProvider>
    </ReactFlowProvider>
  )
}

export default App
