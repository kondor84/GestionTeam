import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BitlogicoImage from "./BitlogicoImage";
import ProfileForm from "./ProfileForm";
import SubmitBotton from "./SubmitBotton";
import "./css/profile.css"
const Profile = (props) => {
  const { bitlogico } = props;
  const [updatedBitlogico, setUpdatedBitlogico] = useState(bitlogico);

  const handleChange = (e) => {
    setUpdatedBitlogico({
      ...updatedBitlogico,
      [e.target.name]: e.target.value,
    });
  };

  const handlechangeimage = async (e) => {
    if (e.target.files[0]) {
      if (e.target.files[0].size > 4194304) {
        // 5242880 = 5MB
        // 4194304 = 4MB

        e.target.value = null;
        setUpdatedBitlogico({
          ...updatedBitlogico,
          image: null,
        });

        return;
      }
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        setUpdatedBitlogico({
          ...updatedBitlogico,
          image: reader.result,
        });
      };
    } else {
      setUpdatedBitlogico({
        ...updatedBitlogico,
        image: null,
      });
    }
  };

  const saveChanges = () => {
    console.log(updatedBitlogico);
  };
  return (
    <Container className="profile-box">
      <Row className="d-flex justify-content-center align-items-center my-5">
        <Col sm={12} md={8} xl={6} className="boxPerfil p-4">
          <BitlogicoImage updatedBitlogico={updatedBitlogico} />
          <ProfileForm
            handleChange={handleChange}
            handlechangeimage={handlechangeimage}
          />
          <SubmitBotton saveChanges={saveChanges} />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
