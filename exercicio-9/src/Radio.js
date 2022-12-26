import React from 'react'

const Radio = ({pergunta, options, id, onChange, active}) => {
    if (!active)return null;

  return (
    <form onSubmit={(event) => event.preventDefault()}>
        
   <fieldset>
        <legend>{pergunta}</legend>
        {options.map((option) => <label key={option}>
            <input 
            type='radio' 
            id={id} 
            value={option} 
            onChange={onChange} 
            name={id}  />
            {option}
            </label>)}
    </fieldset>
    </form>
   
  )
}

export default Radio