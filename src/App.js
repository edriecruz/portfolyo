import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Me from './Components/Me';
import Figma from './Components/Figma';
import ReactJS from './Components/React'

import './App.scss';

function App() {

  return (
    <>
    <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route  path='/ME' element={<Me/>}/>
      <Route  path='/FIGMA' element={<Figma/>}/>
      <Route  path='/REACT' element={<ReactJS/>}/>
    </Routes>
    </>
  )
}

export default App;
