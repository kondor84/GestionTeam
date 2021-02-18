import React from "react";
import { Form, Container } from "react-bootstrap";
const AppreciationForm = (props) => {
  const {handleChange, saveChanges} = props
  return (
    <Container>
      <Form onSubmit={saveChanges}>
        <Form.Group className="my-4" controlId="form-motivo" >
          <Form.Label className="justify-content-start">Motivo</Form.Label>
          <Form.Control
            className="border border-primary rounded-left"
            type="text"
            placeholder="Ingrese su número de teléfono"
            name="reason"
            maxLength="50"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default AppreciationForm;
