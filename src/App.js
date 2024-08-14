import React from 'react';
import './App.css';

import Navbar from './Navbar';
import Neworder from './Neworder';

function App() {
  return (
    <div className="App">
        <div className='Navbar'><Navbar /></div>
        <div className='NeworderBody'><Neworder /></div>
    </div>
  );
}

export default App;
