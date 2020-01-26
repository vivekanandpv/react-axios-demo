import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Playground from './Playground';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className='container'>
        <Playground></Playground>
      </div>
    </React.Fragment>
  );
}

export default App;
