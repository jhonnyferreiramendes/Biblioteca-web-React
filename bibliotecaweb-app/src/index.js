import React from 'react';
import ReactDOM from "react-dom/client";
import 'bootswatch/dist/flatly/bootstrap.css'
import Login from './views/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/' element={<Home/>}/>
  </Routes>
  </BrowserRouter>
);


