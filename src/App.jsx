import { useState } from 'react';
import Editor from './components/editor/editor';
import Sidebar from './components/sidebar/sidebar';

import './App.css'

function App() {
  return (
     <div className='grid grid-cols-12 bg-black' style={{ height: "100vh" }}>
      <Sidebar />
      <Editor />

    </div>
    
  )
}

export default App
