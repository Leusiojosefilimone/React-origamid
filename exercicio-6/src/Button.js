import React from 'react';

function Button({ text, func}) { 
  return (
    <button style={{margin: '10px'}} onClick={() => func(text)} >{text}</button>
  )
}

export default Button