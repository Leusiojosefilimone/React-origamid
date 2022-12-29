import React from 'react'
//npm install react-helmet
const Head = ({title}) => {
   React.useEffect(() => {
     document.title = 'Dogs  ' + title
   }, [title]) 
  return(
    <></>
  )
}

export default Head