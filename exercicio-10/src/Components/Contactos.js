import React from 'react'
import styles from "./Contactos.module.css"
import foto from "../img/contato.jpg"
import Head from './Head'

const Contactos = () => {
  return (
    <section className={styles.Contacto + " animeLeft"}>
      <Head title="Contactos"/>
        <img src={foto} alt="maquina de escrever"/>
        <div>
          <h1>Entre em contacto</h1>
           <ul className={styles.dados}>
          <li >
            leusiojosefilimone@gmail.com
          </li>
          <li>
            +258-856-624-299
          </li>
            <li>
              Rua aeroporto, 122
            </li>
        </ul>
        </div>
        
    </section>
  )
}

export default Contactos