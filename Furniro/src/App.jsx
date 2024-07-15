import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

// import './App.css'
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Shop from './components/Shop.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';


function App() {
  

  return (
    <React.Fragment>

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      

      
      
      
    </React.Fragment>
  )
}

export default App
