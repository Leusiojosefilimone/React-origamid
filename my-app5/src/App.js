import React, {useState} from "react";
import Button from "./Button";
import Produto from "./Produto";

 function App() {
  const [produto, setProduto] = useState(null)
  
  React.useEffect(() => {
    if(produto !== null){ window.localStorage.setItem('produto', produto)
  }}, [produto])

  function handleClick (text) { 
    setProduto(text)
     
  }
    return (
    <div>
      <h2>Preferecia:<span>{produto}</span></h2>
      <Button func={handleClick} text='smartphone'/>
      <Button func={handleClick} text='notebook'/>
      <Produto produto={produto}/>
    </div>)
}


export default App;
