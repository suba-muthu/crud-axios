import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Curd App/Home';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;