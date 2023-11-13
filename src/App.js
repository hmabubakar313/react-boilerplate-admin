import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import About from './components/navbar/About';
import Contact from './components/forms/Form';
import Footer from './components/footer/Footer';
import Home from './components/navbar/Home';






const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container-fluid  m-0 p-0">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact_us" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
