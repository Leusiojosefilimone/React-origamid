const Produtos =[
  {
    id:1,
    nome:'SmartPhone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766']
  },
  {
    id:2,
    nome:'NoteBook',
    preco:  'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59']
  },
  {
    id:3,
    nome:'Tablet',
    preco:  'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786']
  }
]
  
// const preco = Produtos.map( (produto) => produto.preco.replace('R$', '') )
// const cores = Produtos.map( (cores) => cores.cores)

function App() {
   let dados = Produtos
   .filter((produto) => Number(produto.preco.replace('R$', '')) > 1500)
  

  return dados.map((dado => {
    return(
      <div>
        <h1>{dado.nome}</h1>
        <p >Preco <span style={{color:'green', fontWeight:'bold'}}>{dado.preco}</span></p>
        {dado.cores.map((cor) => {
          return <p style={{backgroundColor: cor, color: 'white', marginLeft: '20px'}}>{cor}</p>
        })}
      </div>
    )
  }))
}



   

export default App;
