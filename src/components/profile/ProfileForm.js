import React from "react";
import { Form } from "react-bootstrap";

const ProfileForm = (props) => {
  const { handlechangeimage, handleChange, saveChanges } = props;
  return (
    <Form onSubmit={saveChanges}>
      <Form.Group className="my-4" controlId="imagen">
        <Form.Label>Foto de perfil</Form.Label>
        <Form.File
          id="imagen"
          name="imagen"
          accept="image/*"
          onChange={handlechangeimage}
        />
      </Form.Group>
      <Form.Group className="my-4" controlId="formName">
        <Form.Label className="justify-content-start">Nombre:</Form.Label>
        <Form.Control
          className="border border-success rounded-left"
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          onChange={handleChange}
          maxLength="40"
        />
      </Form.Group>
      <Form.Group className="my-4" controlId="formName">
        <Form.Label className="justify-content-start">Apellido:</Form.Label>
        <Form.Control
          className="border border-success rounded-left"
          type="text"
          placeholder="Apellido"
          name="lastname"
          onChange={handleChange}
          maxLength="40"
        />
      </Form.Group>
      <Form.Group className="my-4" controlId="formTelefono">
        <Form.Label className="justify-content-start">
          Teléfono (opcional):
        </Form.Label>
        <Form.Control
          className="border border-success rounded-left"
          type="number"
          placeholder="Ingrese su número de teléfono"
          name="phoneNumber"
          onChange={handleChange}
          maxLength="14"
        />
      </Form.Group>
    </Form>
  );
};

export default ProfileForm;
