import React, { Component } from "react";
import { Button, Modal, Row, Col, Image, Form } from "react-bootstrap";
export default class ModalMember extends Component {
  constructor(props) {
    super(props);
    this.state = { team: this.props.team };
    this.updateState = this.updateState.bind(this);
  }

  updateState(updatedTeam) {
    this.setState(() => ({ team: updatedTeam }));
  }
  saveToLS(idMember) {
    const amountToUpdate = this.props.newAmount;
    const team = this.props.team;
    let memberIndex = team.findIndex((member) => member.id === idMember);
    team[memberIndex].deuda.amount = amountToUpdate;
    localStorage.setItem("ramita", JSON.stringify(team));
    this.updateState(team);
  }
  render() {
    const { name, deuda, id } = this.props.member;

    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.handleClick}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} lg={6} sm={12}>
              <img className="img-thumbnail" src="" alt="teams member" />
            </Col>
            <Col md={6} lg={6} sm={12}>
              <h4 className="py-3">
                Debe: {deuda.amount} docena de facturas <span>&#129360;</span>
              </h4>
              <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>
                    {" "}
                    <h5> Actualizar estado:</h5>
                  </Form.Label>
                  <Form.Control
                    className="py-2 my-3 w-100"
                    as="select"
                    customname="newAmount"
                    name="newAmount"
                    onChange={this.props.handleChange}
                    value={this.props.newAmount}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Control>
                </Form.Group>
              </Form>
              <h5 className="py-3 ml-2">
                Fecha de actualización: {deuda.date}
              </h5>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-success" onClick={this.props.handleClick}>
            {" "}
            Cerrar
          </Button>
          <Button variant="btn btn-outline-success" onClick={() => this.saveToLS(id)}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
