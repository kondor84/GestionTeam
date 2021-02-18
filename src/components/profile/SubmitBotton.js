import React from "react";
import { Button } from "react-bootstrap";

const SubmitBotton = (props) => {
    const {saveChanges} = props
  return (
    <div>
      <Button
        variant="success"
        className="w-100 my-3 text-uppercase "
        onClick={(e) => saveChanges(e)}
      >
        Guardar
      </Button>
    </div>
  );
};

export default SubmitBotton;
