import React from 'react';
import Titulo from '../Titulo';

function Products() {

const produtos =[
    {nome: 'Notebook', Propriedades:['16gb RAM', '512gb']},
    {nome: 'Smartphone', Propriedades:['2gb RAM', '128gb']},
    
  ]

  return <>
           <Titulo text='Products'/>
{produtos.map((produto) => {
    return <div style={{border: '2px solid black', marginBottom: '5px', padding: '10px'}}>
         <h4 style={{margin: '10px 0 0 10px'}}> {produto.nome}</h4>
         <ul>
            {produto.Propriedades.map((propriedade) => {
                return <li>{propriedade}</li>
            })}
         </ul>
    </div>
  })}
  </>
  
}

export default Products