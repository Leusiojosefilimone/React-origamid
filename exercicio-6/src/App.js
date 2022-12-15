import Button from "./Button";
import UseLocalStorage from "./useLocalStorage";
import UseFetch from "./useFetch";
import React from "react";


function App() {
  const [produto, setProduto] = UseLocalStorage('produto','');
  const {request, data, loading} = UseFetch()

  function handleClick(text){
    setProduto(text)
  }

  React.useEffect(() => {
    request(`https://ranekapi.origamid.dev/json/api/produto/`)
  },[])
  if(loading) return <p>Caregando...</p>
  if(data === null) return null;
    return (
    <div>
      <h2>Preferecia:{produto}</h2>
      <Button func={handleClick} text='smartphone'/>
      <Button func={handleClick} text='notebook'/>
       
   {data.map((produto) => {
    return(
      <div key={produto.id}>
      <h3>{produto.nome}</h3>
    </div>
    )
   })}
  
    </div>)
}


export default App;
