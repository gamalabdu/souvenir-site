import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import About from './components/About/About';
import { AnimatePresence } from 'framer-motion';
import WorkPage from './components/WorkPage/WorkPage';

function App() {

  const location = useLocation();

  const [choice, setChoice] = useState<string>('campaign')


  return (

    <div className="App">
      <AnimatePresence initial={false} mode='wait'>
       <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Main/>} >
            <Route index element={<Home/>} />
            <Route path='home' element={<Home/>} />
            <Route path='work' element={ <Work choice={choice} setChoice={setChoice} />} />
            <Route path='work/:name' element={<WorkPage />} />
            <Route path='about' element={<About/>} />
          </Route>
        </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
