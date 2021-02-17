import React from "react";
import { Button } from "react-bootstrap";

const SubmitBotton = (props) => {
    const {saveUser} = props
  return (
    <div>
      <Button
        variant="success"
        className="w-100 my-3 text-uppercase "
        onClick={() => saveUser()}
      >
        Guardar
      </Button>
    </div>
  );
};

export default SubmitBotton;
