import React, { Component } from "react";
import { Col, Card, Button, Alert } from "react-bootstrap";
import ModalMember from "./ModalMember";
import Canva from "./Canva";
import "../teamStyle.css";
export default class Member extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, newAmount: 0 };
    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  showModal() {
    this.setState(() => ({ modal: true }));
  }
  handleClick() {
    this.setState(() => ({ modal: false }));
  }
  handleChange(e) {
    this.setState(() => ({ newAmount: e.target.value }));
  }
  render() {
    const member = this.props.member;
    return (
      <Col
        key={member.id}
        md={6}
        sm={12}
        lg={4}
        className="d-flex justify-content-center align-items-center p-3"
      >
        <Card style={{ width: 18 + "em" }} className="cards-team">
          <Canva colour={member.colour} />
          <Card.Body>
            <Card.Title>{member.name}</Card.Title>
            <Card.Text>
              {member.role}
              <Alert
                className={
                  member.deuda.amount == 0
                    ? "alert alert-success my-2"
                    : "alert alert-primary my-2"
                }
              >
                {member.deuda.amount == 0
                  ? "No debe facturas"
                  : `Debe ${member.deuda.amount} docenas de facturas `}{" "}
                <span>&#129360;</span>
              </Alert>
            </Card.Text>
            <Button onClick={this.showModal} variant="btn btn-outline-success">
              Ver más
            </Button>
          </Card.Body>
        </Card>
        <ModalMember
          member={member}
          showModal={this.state.modal}
          handleClick={this.handleClick}
          newAmount={this.state.newAmount}
          handleChange={this.handleChange}
          team={this.props.team}
        />
      </Col>
    );
  }
}
