import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
font-size: 2rem;
color: tomato;
`
const Titulo2 = styled.h3`
background: ${({valor, saldo}) => valor > saldo ? 'red' : 'green'};
padding: 2rem;
`

const Paragrafo = styled.p`
background: ${({cor}) => cor}  ;
font-size: 1.5rem;
`
const ComprarButton = styled.button`
background-Color: #33b342;
`
const ProdutosContainer = styled.div`
display: flex;
`
const Produto = styled.div`
padding:20px;
`
function App(){
  const produtos =[
    {produto:'Tablet', preco: 400},
    {produto:'Smartphone', preco: 100},
    {produto:'Computador', preco: 1500},
    {produto:'Relogio', preco: 500},
    {produto:'Televisao', preco: 600}
  ]
  const [valor, setvalor] = React.useState(0)
  const saldo =  7000;
return(
   <>
   <ProdutosContainer>
   {produtos.map(({produto, preco}) => {
    console.log(produto)
      return( 
      <Produto key={produto}>
          <Titulo>{produto}</Titulo>
          <Paragrafo cor='red'>R$ {preco}</Paragrafo>
          <ComprarButton onClick={() => valor <= saldo ? setvalor(valor + preco) : console.log('ola mundo')}>Comprar</ComprarButton>
      </Produto>)
    })}
  
   </ProdutosContainer>  
   <h2>saldo: R$ {saldo}</h2>
   <h1>{valor ?  `Valor a ser pago R$ ${valor }` : 'Sem compras'}</h1>
   <Titulo2 saldo={saldo} valor={valor}>{saldo < valor ? 'saldo insuficinte' : ' saldo disponivel voce pode comprar'}</Titulo2>
   </>
)

  
}

export default App;
