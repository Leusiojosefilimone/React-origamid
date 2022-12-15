import React, {useState} from "react";
import Button from "./Button";
import Produto from "./Produto";
import UseLocalStorage from "./useLocalStorage";


function App() {
  const [produto, setProduto] = UseLocalStorage('produto','');

  function handleClick(text){
    console.log(text)
    setProduto(text)
  }
  console.log(produto)
    return (
    <div>
      <h2>Preferecia:{produto}</h2>
      <Button func={handleClick} text='smartphone'/>
      <Button func={handleClick} text='notebook'/>
      <Produto produto={produto}/>
    </div>)
}


export default App;
