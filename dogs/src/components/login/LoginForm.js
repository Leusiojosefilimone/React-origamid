import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword]= React.useState('')

  async function handleSubmit (event){
        event.preventDefault()
         await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1token', {
            method: 'POST',
            headers:{
                'Content-Type': 'aplication/json',
            },
            body: JSON.stringify({username, password}),
        }).then(res =>  console.log(res));
        
        
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