import React from 'react'
import PropTypes from 'prop-types'



const Button = (props) => {
     const [num, dispatch] = React.useReducer(reducer, 0)

 function reducer (num, action){
    if(action === 'aumentar')
    return num + 1
 }
 
  return (
  <>
   <button 
    onClick={() => dispatch('aumentar')}
    style={{width:`${props.width}px`,
     background: `${props.fundo}` }} >Button</button>
    <p>contar: {num}</p>
  </>
   
  )
}
Button.propTypes={
    with: PropTypes.func,
}


export default Button