import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Home from './components/pages/home.js';


function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
