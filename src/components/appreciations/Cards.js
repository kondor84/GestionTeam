import React, { useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import AppreciationsModal from "./AppreciationsModal";
const Cards = (props) => {
  const { member, handleChange, saveChanges, addId } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Col
      key={member.id}
      md={6}
      sm={12}
      lg={4}
      className="d-flex justify-content-center align-items-center p-3"
    >
      <Card style={{ width: 18 + "em" }} className="cards-team">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{member.name}</Card.Title>
          <Card.Text>{member.role}</Card.Text>
          <Button
            variant="btn btn-outline-success w-100"
            onClick={() => {
              handleShow()
              addId(member.id);
            }}
          >
            Agradecer
          </Button>
        </Card.Body>
      </Card>
      <AppreciationsModal
        show={show}
        member={member}
        handleClose={handleClose}
        handleChange={handleChange}
        saveChanges={saveChanges}
      />
    </Col>
  );
};

export default Cards;
