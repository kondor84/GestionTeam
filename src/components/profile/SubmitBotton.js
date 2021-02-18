import React from "react";
import { Button } from "react-bootstrap";

const SubmitBotton = (props) => {
    const {saveChanges, id} = props
    console.log(id)
  return (
    <div>
      <Button
        className="w-100 my-3 text-uppercase"
        onClick={(e) => saveChanges(e,id)}
      >
        Guardar
      </Button>
    </div>
  );
};

export default SubmitBotton;
