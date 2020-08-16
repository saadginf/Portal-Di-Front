import React from 'react'
import bookImg from "../../assets/book-default.png" 


import {Card} from "react-bootstrap";
const BiblioItem = (props) => {
    return (

          <div> 
          <Card  style={{ width: '18rem' }}>
          <Card.Body>
            <img src={bookImg} alt=""></img>
    <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.selected.map((value) => (
                  <strong key={value.id}>{value.libbele}</strong>
              ))}
    
        Theme: {props.theme.libbele} <br/>
        Classification : {props.classification.libbele}
    </Card.Text>
    <Card.Link href={"/detailsOuvrage/"+props.id}>Détail d'ouvrage</Card.Link>
          </Card.Body>
          </Card>
              </div>
    )
}

export default BiblioItem
