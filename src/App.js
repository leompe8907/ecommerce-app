import React from 'react';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productos from './components/Productos/Productos';


const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/productos' element={<Productos/>}/>
      </Routes>
    </Router>
    </div>
  );
};

export default App;

