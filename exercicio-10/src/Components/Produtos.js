import React, { useState } from 'react'
import styles from './Produtos.module.css'
import Head from './Head'
import {Link} from 'react-router-dom'

const Produtos = () => {
  const [Produtos,  setprodutos] = useState(null)
  React.useEffect(() => {
       fetch('https://ranekapi.origamid.dev/json/api/produto').then(res => res.json().then(json => setprodutos(json)))
  },[])
  console.log(Produtos)
  if(Produtos === null) return null
  return (
    <section className={`${styles.produtos} animeLeft`}>
       {Produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}/>
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
       ))}
         <Head/>
    </section>
  )
}

export default Produtos