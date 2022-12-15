import React from 'react';

const UseFetch = () => {
    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(null)

    async function request(url, options){
      try{
      setLoading(true)
        const response = await fetch(url, options)
        const json = await response.json()
        setData(json)
       
      }catch(erro){
        setError(erro)
      }finally{
         setLoading(false)
      }
    }

  return {data, error, loading, request}
}

export default UseFetch