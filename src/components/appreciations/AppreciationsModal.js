import React from "react";
import { Modal, Button } from "react-bootstrap";
import AppreciationForm from "./AppreciationForm";
import SubmitBotton from "../profile/SubmitBotton";
const AppreciationsModal = (props) => {
  const {
    show,
    handleClose,
    member: { name, id },
    saveChanges,
    handleChange,
  } = props;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <AppreciationForm handleChange={handleChange} saveChanges={saveChanges} />
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <SubmitBotton saveChanges={saveChanges} id={id}/>
      </Modal.Footer>
    </Modal>
  );
};

export default AppreciationsModal;
