import React, { useState } from "react";
import { Container } from "react-bootstrap";
import BitlogicoImage from "./BitlogicoImage";
import ProfileForm from "./ProfileForm"
import SubmitBotton from "./SubmitBotton"
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

  const saveChanges = (e) =>{
      e.preventDefault();
      console.log(updatedBitlogico)
  }
  return (
    <Container>
        <BitlogicoImage updatedBitlogico={updatedBitlogico} />
        <ProfileForm saveChanges={saveChanges} handleChange={handleChange} handlechangeimage={handlechangeimage} />
        <SubmitBotton saveChanges={saveChanges}/>
    </Container>
  );
};

export default Profile;
