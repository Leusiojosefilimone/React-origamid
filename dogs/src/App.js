import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App"> 
   
      <BrowserRouter>
        <Header/>
           <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login/*" element={<Login/>}/>
           </Routes>
        <Footer/>
      </BrowserRouter>
    
  
    </div>
  );
}

export default App;
