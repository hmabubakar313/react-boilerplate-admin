import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./components/navbar/About";
import Footer from "./components/footer/Footer";
import Home from "./components/navbar/Home";
// import ContactUs from "./components/forms/ContactUs";


import Table from "./components/table/Table";
import "./App.css";

// import FormikWrapper from "./components/Forms/FormikWrapper";
import SignUp from "./components/Forms/SignUp";
import Login from "./components/Forms/Login"
import FormikWrapper from "./components/Forms/FormikWrapper";
import Cart from "./components/Cart/Cart";




const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container-fluid  m-0 p-0 app bg-light">
          <Routes>
            <Route path="/about" element={<About />} />
            {/* <Route path="/forms" element={<FormikWrapper/>} /> */}
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/table" element={<Table />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
