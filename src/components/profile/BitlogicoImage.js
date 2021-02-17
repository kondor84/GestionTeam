import React from "react";
import { Image, Row, Col } from "react-bootstrap";
const BitlogicoImage = (props) => {
  const { updatedBitlogico } = props;
  return (
    <Row className="p-2">
      <Col className="d-flex justify-content-around align-items-center  m-auto" sm={8} xs={6} md={8} lg={8}>
        <Image
          name="image"
          fluid
          className="img-fluid my-4 profile-image"
          roundedCircle
          src={
            !updatedBitlogico.image.length
              ? updatedBitlogico.image.imageTest
              : updatedBitlogico.image
          }
        />
      </Col>
    </Row>
  );
};

export default BitlogicoImage;
