import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Curd App/Home';
import Create from './Curd App/Create';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;