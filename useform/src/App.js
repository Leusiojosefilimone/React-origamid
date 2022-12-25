import React from "react";
import useForm from "./hooks/useForm";
import Input from "./Input";

function App() {
  const cep = useForm('cep')


  function handleSubmit(event){
    event.preventDefault()
    if(true){
      console.log('Enviar')
    }else{
      console.log('nao enviar')
    }
  }
  return(<>
    <form onSubmit={handleSubmit}>
        <Input
        label='Cep'
        id='cep'
        type='text'
        value= {cep.value}
        placeholder="00000-000"
        {...cep}/>
         <br></br>
        <button>Enviar</button>
    </form>
  
  </>
  )
}

export default App;
