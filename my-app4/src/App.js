import {useState} from "react";
import Button from "./Button";

function App() {
  const [produto, setProdutos] = useState('tablet')

 let dados = fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
  .then((res) => res.json())
  .then((res) => res)


const dado = () => {
    dados
}



  function productChange(Produto){ 
    setProdutos(Produto)

  }
  

 
  

    return (
    <div>
      <Button func={productChange} text='tablet'/>
      <Button func={productChange} text='smartphone'/>
      <Button func={productChange}text='notebook'/>
      <h1>{}</h1>
      <p>{}</p>

       
    </div>)
}



   

export default App;
