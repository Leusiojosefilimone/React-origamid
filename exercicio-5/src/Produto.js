
import React from 'react'

function Produto({produto}) {
  const [dados, setDados] = React.useState(null)

  React.useEffect(() => {
    if(produto !== null)
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
    .then((res) => res.json())
    .then((json) => setDados(json))
  }, [produto])

  if(dados === null)return null

  return (
    <div>
      <h3>{dados.nome}</h3>
      <p>R$ {dados.preco}</p>
    </div>
  )
}

export default Produto