import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class UpdateButton extends Component {
    render() {
        const member = this.props.member
        function saveToLS() {
            let members = JSON.parse(localStorage.getItem("ramita"));
            let memberFound = members.find(id => member.id === id)
            console.log(memberFound)
        }
    return (
      <div>
        <Button variant="primary" onClick={saveToLS}>
          Save Changes
        </Button>
      </div>
    );
  }
}
