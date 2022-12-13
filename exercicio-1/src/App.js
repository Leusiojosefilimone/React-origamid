
const Luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    {nome: 'notebook', preco: 2500 },
    {nome: 'Geladeira', preco: 3000 },
    {nome: 'Smartphone', preco: 1500 }
  ],
  ativa: true
}

const Mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    {nome: 'notebook', preco: 2500},
    {nome: 'Geladeira', preco: 3000},
    {nome: 'Smartphone', preco: 1500 },
    {nome: 'Guitarra', preco: 3500}
  ],
  ativa: false
}
const estiloAtivo={
  fontWeight: 'bold',
  color: 'green'
}
const estiloInativo={
  fontWeight: 'bold',
  color: 'red'
}

function DescreveClientes ({Cliente}) {
  let preco =  Cliente.compras.map((compra) => compra.preco)
  let totalGasto = 0;

  for (let i = 0; i < preco.length; i++) {
    totalGasto += preco[i];  
  } 
  
  return (
      <>
      <p>Nome: {Cliente.cliente}</p>
      <p>idade: {Cliente.idade}</p>
      <p>Situacao: 
        <span style={Cliente.ativa === true ? estiloAtivo : estiloInativo}>  
          {Cliente.ativa === true ? ' Ativa' : ' Inativa'}
        </span> </p>
        <p>Total Gasto: {totalGasto}</p>
        <p>{totalGasto > 10000 ? 'Voce esta gastando muito' : ''}</p>
    </>
  )
}


function App( {Nome = Mario}) {
  return (
   <>
    <DescreveClientes Cliente={Nome}/>
   </>
  )

  
}

export default App;
