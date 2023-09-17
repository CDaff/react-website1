import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home.jsx'
import Products from './components/pages/Products.jsx'
import Services from './components/pages/Services.jsx'
import SignUp from './components/pages/SignUp.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' Component= { Home } />
          <Route path='/products' Component= { Products } />
          <Route path='/services' Component= { Services } />
          <Route path='/sign-up' Component= { SignUp } />
        </Routes>
      </Router>
    </>
  )
}

export default App
