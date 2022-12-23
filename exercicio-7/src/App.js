import React from "react";
const formFields =[
  {
    id:'nome',
    label:'Nome',
    type:'text'
  },

  {
    id:'email',
    label:'Email',
    type:'email'
  },

  {
    id:'senha',
    label:'Senha',
    type:'password'
  },

  {
    id:'cep',
    label:'Cep',
    type:'text'
  },
  {
    id:'rua',
    label:'Rua',
    type:'text'
  },
  {
    id:'bairro',
    label:'Bairro',
    type:'text'
  },
  {
    id:'cidade',
    label:'Cidade',
    type:'text'
  },
  {
    id:'estado',
    label:'Estado',
    type:'text'
  }
]


function App() {
  const [response, setResponse] = React.useState(null)
  const [form, setForm]= React.useState({
    nome:'',
    email:'',
    senha:'',
    cep:'',
    numero:'',
    rua:'',
    bairro:'',
    cidade:'',
    estado:'',
  })

  function handleChange({target}){
    const {id, value}= target;
    setForm({...form, [id]: value})
  }

  function handleSubmit(event){
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario',{
      method:'POST',
      headers:{
       'Content-Type': 'aplication/json',
      },
      body: JSON.stringify(form),
    }).then((res) => setResponse(res))

  }

  return (
   <form onSubmit={handleSubmit}>
    {formFields.map(({id, type, label}) => (
      <div>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id}  onChange={handleChange}/>
      </div>
    ))}
      {response && response.ok && <p>Formulario enviado</p>}
     <button>Enviar</button>

   </form>
  )

  
}

export default App;
