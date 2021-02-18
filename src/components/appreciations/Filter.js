import React, { useState } from "react";
import { Row, Form, FormControl, Button } from "react-bootstrap";

const Filter = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const fetchData = (e) => {
    e.preventDefault();
    //api query = search
    console.log(search);
  };
  return (
    <Row>
      <Form onSubmit={fetchData}>
        <FormControl
          onChange={handleChange}
          name="search"
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button onClick={fetchData} variant="outline-success">
          Search
        </Button>
      </Form>
    </Row>
  );
};

export default Filter;
