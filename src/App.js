import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import ReactGA4 from 'react-ga4';
import Home from './Components/Home';
import Me from './Components/Me';
import Figma from './Components/Figma';
import ReactJS from './Components/React'

import './App.scss';

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   ReactGA4.initialize('G-TZJNVWY191');
  // }, []);

  //   useEffect(() => {
  //   ReactGA4.send('pageview', location.pathname + location.search);
  // }, [location]);

  return (
    <>
      <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/ME' element={<Me />} />
          <Route path='/FIGMA' element={<Figma />} />
          <Route path='/REACT' element={<ReactJS />} />
      </Routes>
    </>
  )
}

export default App;
