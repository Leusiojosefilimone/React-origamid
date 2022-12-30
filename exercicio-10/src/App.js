import React from "react";
import "./App.css"
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Produtos from "./Components/Produtos";
import Contactos from "./Components/Contactos";
import Produto from "./Components/Produto";

function App() {
   
  return(<div className="App">
     <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Produtos/>}/>
        <Route path="/produto/:id" element={<Produto/>}/>
        <Route path="/contacto" element={<Contactos/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </div>
   
  )
}

export default App
