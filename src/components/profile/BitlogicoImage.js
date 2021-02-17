import React from "react";
import { Image } from "react-bootstrap";
const BitlogicoImage = (props) => {
  const { updatedBitlogico } = props;
  return (
    <div>
      <Image
        name="image"
        fluid
        className="img-fluid my-4 text-overflow"
        roundedCircle
        src={!updatedBitlogico.image.length ?  updatedBitlogico.image.imageTest : updatedBitlogico.image}
      />
    </div>
  );
};

export default BitlogicoImage;
