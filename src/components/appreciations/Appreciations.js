import React, { useState } from "react";
import { Row, Container } from "react-bootstrap";
import { teamArray } from "../team/teamArray";
import Cards from "./Cards";
import Filter from "./Filter";
const Appreciations = (props) => {
  const { appreciationObject } = props;
  const [appreciation, setAppreciation] = useState(appreciationObject);

  const handleChange = (e) => {
    setAppreciation({
      ...appreciation,
      [e.target.name]: e.target.value,
    });
  };

  const saveChanges = (e, id) => {
    setAppreciation({
      ...appreciation,
      id:id
    });
    e.preventDefault();
    //e.preventDefault();
    console.log(appreciation);
  };

  return (
    <Container>
      <Filter />
      <Row>
        {teamArray.map((member) => (
          <Cards
            key={member.id}
            member={member}
            handleChange={handleChange}
            saveChanges={saveChanges}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Appreciations;
