import React from 'react'

const types = {
  cep : {
    regex: /^\d{5}-?\d{3}$/,
    menssage: 'cep invalido'
  },
  email: {
    regex: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/,
    menssage:'email invalido'
  },
  password: {
    regex: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
    menssage: 'palavra chave incorrecta'
  }
}

const useForm = (type) => {
    const [value , setValue] = React.useState('')
    const [error, setError] = React.useState(null)
    
    function validate(value){
      if(value.length === 0){
        setError('preencha um valor');
        return false
      }else if(types[type] && !types[type].regex.test(value)){
        setError(types[type].menssage);
        return false
      }else{
        setError(null)
        return true
      }
    }
    
    function onChange ({target}){
      validate(target.value);
      setValue(target.value)
    }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value)
  }
}

export default useForm