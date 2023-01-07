import React from 'react';

  const types = {
    email:{
        regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
        message: 'digite um email valido'
    }
  }

const useForm = (type) => {
    const [value, setvalue] = React.useState('')
    const [erro, setError] = React.useState('')

    function validate(value){
       if(type === false) return true
       if(value.length === 0){
        setError('Preencha um valor')
        return false;
       } else if(types[type] && !types[type].regex.test(value)){
        setError(types[type].message)
        return false
       }else{
         return true;
         setError(null)
       }
    }

    function onChange({target}){
      if (erro) validate(target.value)
      setvalue(target.value)
    }
  return {
     erro,
     value,
     setvalue,
     onChange,
     validate: () => validate(value),
     onBlur: () => validate(value)}
}

export default useForm