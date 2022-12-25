import React from 'react'

function Input({id, label, onChange, placeholder, type, error, onBlur, value}) {
  return (
  <>
    <label htmlFor={id}>{label}</label>
    <input 
    id={id} 
    name={id}
    type={type} 
    value={value}
    onBlur={onBlur}
    onChange={onChange} 
    placeholder={placeholder} />
    {error && <p>{error}</p>}
  </>
  )
}

export default Input