import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ProductsPage from './Pages/ProductsPage/ProductsPage';






const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<ProductsPage/>} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;

