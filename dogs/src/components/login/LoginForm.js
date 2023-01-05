import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword]= React.useState('')
 function handleSubmit (event){
        event.preventDefault()
         fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
            method: 'POST',
            headers:{
                'Content-Type': 'aplication/json',
            },
            body: JSON.stringify({ username, password }),
        }).then(res =>  {
          return res.json()}).then((json) => console.log(json))
    }

  return (
    <div>
        <h1>Login</h1>
          
        <form action='' onSubmit={handleSubmit}>
            <input 
            type='text'
            value={username}
            onChange={({target}) => setUsername(target.value)}/>

            <input 
            type='password'
            value={password}
            onChange={({target}) => setPassword(target.value)}/>

            <button>Enviar</button>
        </form>

        <Link to='/login/create'>Cadastro</Link>
    </div>
  )
}

export default LoginForm