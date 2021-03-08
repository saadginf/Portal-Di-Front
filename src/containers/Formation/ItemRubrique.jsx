import React from "react";

import { Card, Button } from "react-bootstrap";
const ItemRubrique = (props) => {
  return (
    <Card style={{ width: "18rem", margin: "15px" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button
          href={props.href ? props.href : "#"}
          variant="primary"
          onClick={props.onClick ? props.onClick : ""}
        >
          Commencer
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemRubrique;
