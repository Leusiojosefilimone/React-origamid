import React from "react"
import Radio from "./Radio";

const perguntas = [
  {
    pergunta:'Qual é o método utilizado para criar componentes',
    options: [
      'React.makerConponent()',
      'React.creactComponent()',
      'React.creactElement()'
    ],
    resposta: 'React.creactElement()',
    id: 'p1'
  },
  {
    pergunta:'Como criamos um conponente externo',
    options: [
     ' import component from"./component"',
      'require("./component")',
      'import("./componen")'
    ],
    resposta: ' import component from"./component"',
    id: 'p2'
  },
  {
    pergunta:'Qual hook não é nativo',
    options: [
     ' useEffect()',
      'useFetch()',
      'useCallback()'
    ],
    resposta: 'useFetch()',
    id: 'p3'
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook' ,
    options: [
     ' set',
      'get',
      'use'
    ],
    resposta: 'use',
    id: 'p4'
  }
]

function App() { 
  const [slide, setSlide] =React.useState(0)
  const [Resultado, setReasultado] =React.useState()
  const [respostas, setrespostas] = React.useState({
    p1:'',
    p2:'',
    p3:'',
    p4:'',
  })
 

   function handlechange({target}){
    setrespostas({...respostas, [target.id]: target.value})
   }

   function verificarResultado(){
    const corretas = perguntas.filter(({id, resposta}) => respostas[id] === resposta)
    setReasultado(`você a certou ${corretas.length} de ${perguntas.length}`)
   }

   function handleClick(){
    if (slide  < perguntas.length ) {
      setSlide(slide + 1)
    }else{
      verificarResultado()
    }
   }

   return(
    <>
    {perguntas.map((pergunta, index) => 
    <Radio value={respostas[pergunta.id]} 
    key={pergunta.id}
    active={slide === index} 
    onChange={handlechange}
    {...pergunta}/>)}
     <br></br>
    {!Resultado ? <button onClick={handleClick}>Proximo</button> :
     <p>{Resultado}</p>}
    </>
  )
}

export default App;
