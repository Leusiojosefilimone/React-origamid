import React from "react";
import useForm from "./hooks/useForm";
import Input from "./Input";

function App() {
  const types = {
   cep : useForm('cep'),
   email : useForm('email'),
   password: useForm('password')
}
console.log(types.email)
  const inputProps = [
    {label:'Nome', id:'nome', type:'text',  },
     {label:'Email', id:'email', type:'email',  },
     {label:'Cep', id:'cep', type:'text', placeholder:'00000-000',  },
     {label:'Password', id:'password', type:'password', placeholder:'1-8 caracteres',  }
  ]


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
        {inputProps.map((inputprop) => {
           
          return <Input
          {...types[inputprop.id]}
          {...inputprop}
         />
       
        })}
        <br></br>
        <button>Enviar</button>
    </form>
  
  </>
  )
}

export default App;
