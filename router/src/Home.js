import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'

const Home = () => {
  return (
    <div>
        <h1>home</h1>
        <Head title="Home"/>
        <p>Bem vindo(a) ao Home</p>
        <Link to='produtos/notebook'>Notebook</Link>{'        '}
        <Link to='produtos/smartphone'>Smartphone</Link>
    </div>
  )
}

export default Home