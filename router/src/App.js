import React from 'react';
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Sobre from './Sobre';
import Error from './Error';
import Login from './Login';
import Produtos from './Produtos';

function App(){

return(
<BrowserRouter>
<Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='sobre' element={<Sobre/>}/>
    <Route path='*' element={<Error/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='produtos/:produto/*' element={<Produtos/>}/>
  </Routes>
</BrowserRouter>
)
}

export default App;
