import React from 'react'
import { useNavigate } from 'react-router-dom'
import Head from './Head'
const Login = () => {
  const navigate = useNavigate()
  function handlelick(){
    navigate('/')
  }
  return (
    <div>
      <Head title="Login"/>
        <h2>Insira os dados</h2>
        <label htmlFor='nome'>Nome</label>
        <input type='text' id='nome' placeholder='insira o teu nome'/>

        <label htmlFor='email'>Email</label>
        <input type='emal' id='email' placeholder='insira o teu nome'/><br></br>

        <button onClick={handlelick}>Enviar</button>
    </div>
  )
}

export default Login