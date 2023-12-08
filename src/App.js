import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./components/navbar/About";
import Footer from "./components/footer/Footer";
import Home from "./components/navbar/Home";
import ContactUs from "./components/forms/ContactUs";
import LoginPage from "./components/forms/LoginForm";
import SignupPage from "./components/forms/SignUp";
import Table from "./components/table/Table";
import "./App.css";




const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container-fluid  m-0 p-0 app bg-light bg-gradient">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact_us" element={<ContactUs />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/table" element={<Table />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
