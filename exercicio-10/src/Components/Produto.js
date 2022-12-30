import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './Produto.module.css'

const Produto = () => {
 const [produto, setproduto] = React.useState(null)
 const [Loading, setLoading] = React.useState(false)
 const [erro, setErro] = React.useState()
 const {id} = useParams()

 React.useEffect(() => {
  async function fetchProduto(url){
    try{
    setLoading(true)
    const res = await fetch(url)
    const json = await res.json()
    setproduto(json)
    }
    catch(erro){
       setErro('Um erro ocorreu!')
    }
    finally{
      setLoading(false)
    }
  }
  fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
 },[id])

 if (Loading) return <div>Carregando...</div>
 if (erro) return <p>{erro}</p>
 if(produto === null) return 

 
  return (
    <section className={styles.produto}>
      {produto.fotos.map(foto => <img key={foto.src} src={foto.src} alt={foto.titulo}/>)}
        <div>
          <h1>{produto.nome}</h1>
          <span className={styles.preco}>R$ {produto.preco}</span>
          <p className={styles.descricao}>{produto.descricao}</p>
        </div>
    </section>
  )
}

export default Produto