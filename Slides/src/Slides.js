import React from 'react'
import styles from './Slides.module.css'

const Slides = ({slides}) => {
    const [active, setActive]= React.useState(0)
    const [position, setPositon] = React.useState(0)
    const contentRef = React.useRef()

 React.useEffect(() => {
    const  {width} = contentRef.current.getBoundingClientRect();
    setPositon(-(active * width))
 },[active]);

function slidePrev(){
  if (active > 0){
    setActive(active - 1)
  }
}

function slideNext (){
    
    if (active < slides.length -1){
        setActive(active + 1)
      }
}

  return (
    <section className={styles.Container} >
        <div 
        ref={contentRef}
        className={styles.Content} 
        style={{transform:` translateX(${position}px)`}}>
             {slides.map((slide) => (
            <div className={styles.Iten} key={slide.id}>{slide.text}</div>
        ))}
        </div>
        <nav className={styles.Nav}>
            <button onClick={slidePrev}>Anterior</button>
            <button  onClick={slideNext}>Proximo</button>
        </nav>
       
    </section>
  )
}
export default Slides