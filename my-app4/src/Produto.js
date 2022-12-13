import React from 'react'

function Produto({dados}) {
  return (
    <div>
        <h3>{dados.nome}</h3>
        <p>R$ {dados.preco}</p>
        <img style={{width: '300px'}} src={dados.fotos[0].src}/>
    </div>
  )
}

export default Produto