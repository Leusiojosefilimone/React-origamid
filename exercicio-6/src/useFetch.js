import React from 'react';

const UseFetch = () => {
    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(null)

    async function request(){
        const response = await fetch(url, options)
        const json = await response.json()
        setData(json)
    }

  return [data, error, loading]
}

export default UseFetch