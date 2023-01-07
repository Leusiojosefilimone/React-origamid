import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../forms/Button'
import Input from '../forms/Input'
import useForm from '../../Hooks/useForm'
import { TOKEN_POST, USER_GET } from '../../Api'

const LoginForm = () => {
    const username = useForm('');
    const password= useForm('');

    async function getUser(token){
      const {url, options} = USER_GET(token)
      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json)
    }

async function handleSubmit (event){
  event.preventDefault()
   if (username.validate() && password.validate()){
    const{url, options}= TOKEN_POST({
      username: username.value,
      password: password.value,
    })
        
      const response =await fetch(url, options)
      const json = await response.json()
      window.localStorage.setItem('token', json.token);
      getUser(json.token);
    }}

  return (
    <div>
        <h1>Login</h1>

        <form action='' onSubmit={handleSubmit}>
           <Input 
           type='text' 
           label='Name'
           name='username'
           {...username}
           />

           <Input 
           type='password' 
           label='Password'
           name='password'
           {...password}/>


          <Button>Enviar</Button>
        </form>

        <Link to='/login/create'>Cadastro</Link>
    </div>
  )
}

export default LoginForm