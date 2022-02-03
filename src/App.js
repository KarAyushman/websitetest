import './App.css';
import Home from './components/home';
import About from './components/about';
import Project from './components/project';
import Navbar from './components/navbar/navbar';
import React from 'react';
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <main>
          <AnimatePresence>
          <Navbar className="navbar"/>
            <Routes>
                <Route path="/" element={<Home/>} exact />
                <Route path="/index.html" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/projects" element={<Project/>} />
                <Route element={Error} />
            </Routes>
          </AnimatePresence>
      </main>
  )
}

export default App;
