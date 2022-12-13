import {useState} from "react";
import Button from "./Button";
import Produto from "./Produto";

 function App() {
  const [dados, setDados] = useState(null)
  


 async function productChange(produto){ 
  const res = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
  const json = await res.json()
  console.log(json)
  setDados(json)
 }
  

    return (
    <div>
      <Button func={productChange} text='tablet'/>
      <Button func={productChange} text='smartphone'/>
      <Button func={productChange}text='notebook'/>
      {dados && <Produto dados={dados}/>}
      
       
    </div>)
}



   

export default App;
