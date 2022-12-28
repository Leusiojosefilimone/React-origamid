import React from 'react'
import Slides from './Slides';



function App(){
 const slides =[
  {
    id:'slide1',
    text: 'Slide1'
  },
  {
    id:'slide2',
    text: 'Slide2'
  },
  {
    id:'slide3',
    text: 'Slide3'
  },
  {
    id:'slide4',
    text: 'Slide4'
  },
  {
    id:'slide5',
    text: 'Slide5'
  },
 ]

return(
<div>
  <Slides slides={slides}/>
</div>
)
}

export default App;
