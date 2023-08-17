import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Curd App/Home';
import Create from './Curd App/Create';
import Edit from './Curd App/Edit';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;