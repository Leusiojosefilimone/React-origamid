import React from 'react'
import { useParams, Routes, Route, NavLink} from 'react-router-dom'
import ProdutoAvaliacao from './ProdutoAvaliacao'
import ProdutoCostumizado from './ProdutoCostumizado'
import ProdutoDescrisao from './ProdutoDescrisao'
import Head from './Head'


const Produtos = () => {
    const params = useParams()
  return (
    <div>
        <Head title="Productos"/>
        <h1>Produtos:   {params.produto}</h1>
        <NavLink to=''>Descrição</NavLink>{'     '}
        <NavLink to='avaliacao'>Avaliacao</NavLink>{'     '}
        <NavLink to='costumizado'>Costumizado</NavLink>
        <Routes>
            <Route path="" element={<ProdutoDescrisao/>} />
            <Route path="avaliacao" element={<ProdutoAvaliacao/>} />
            <Route path="costumizado" element={<ProdutoCostumizado/>} />
        </Routes>
       
    </div>
  )
}

export default Produtos