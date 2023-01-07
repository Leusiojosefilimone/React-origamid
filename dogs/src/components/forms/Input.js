import React from 'react'
import styles from './Input.module.css'

const Input = ({label, name, type, value, onChange, onBlur, erro}) =>{
  return (
    <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={name}>{label}</label>
          <input  
          id={name}
          type={type}
          name={name} 
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={styles.input} />
         {erro && <p className={styles.erro}>{erro}</p>}
    </div>
 
  )
}

export default Input