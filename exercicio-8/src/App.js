import React from "react";



function App() {
  const [cores, setCores] = React.useState(['vermelho'])
  const coresArray = ['azul', 'roxo', 'lanraja', 'verde', 'vermelho', 'cinza', 'amarelo']

  function handleChange({target}){
    if(target.checked){
    setCores([...cores, target.value])
  }else{
    setCores(cores.filter((cor) => cor !== target.value))
  }}
   
  function checkColor(color){
   return cores.includes(color)
  }
  
  return <form>  { coresArray.map((cor) => {
   return <label>
   <input
     type='checkbox'
     value={cor}
     checked={checkColor(cor)}
     onChange={handleChange}/>
     {cor}
 </label>
  })}
  </form>

  }
 
  

  


export default App;
