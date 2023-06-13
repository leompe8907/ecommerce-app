import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

import Productos from './Pages/Productos/Productos';



const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/productos' element={<Productos/>}/>
      </Routes>
    </Router>
    </div>
  );
};

export default App;

