import React from 'react'
import Card from 'react-bootstrap/Card'
import CardHeader from 'react-bootstrap/esm/CardHeader';

function App( ) {
  return (
     <Card bg='dark' text="white" classname="m-5" style={{ maxWidth: '500px', margin: 'auto'}}>
      <CardHeader>Notebook</CardHeader>
      <Card.Body>
        <Card.Title>R$ 2500</Card.Title>
        <Card.Text>Esse é um notebook com 1tb de disco</Card.Text>
      </Card.Body>
      
     </Card>
  )

  
}

export default App;
