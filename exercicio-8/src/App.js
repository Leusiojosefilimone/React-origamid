import React from "react";



function App() {
  const [cores, setCores] = React.useState(['vermelho'])

  function handleChange({target}){
    if(target.checked){
    setCores([...cores, target.value])
  }else{
    setCores(cores.filter((cor) => cor !== target.value))
  }}
   
  function checkColor(color){
   return cores.includes(color)
  }
  
  return (
  <form>
    <label><input
       type='checkbox'
        value='azul'
        checked={checkColor('azul')}
        onChange={handleChange}/>
        azul
    </label>

    <label><input
       type='checkbox'
        value='vermelho'
        checked={checkColor('vermelho')}
        onChange={handleChange}/>
        vermelho
    </label>
   
  </form>)

  
}

export default App;
