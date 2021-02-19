import React, { Component } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
export default class Canva extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      canvas: React.createRef(),
      isDrawing: false,
      cx: [],
      cy: [],
    };
    this.draw = this.draw.bind(this);
    this.save = this.save.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.clear = this.clear.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }
  canvas() {
    return this.state.canvas.current;
  }
  ctx() {
    return this.canvas().getContext("2d");
  }
  draw(e) {
    const ctx = this.ctx();
    if (this.state.isDrawing) {
      ctx.lineCap = "round";
      ctx.strokeStyle = this.props.colour;
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(this.state.x, this.state.y);
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.stroke();
      this.setState({
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
        cx: [...this.state.cx, this.state.x],
        cy: [...this.state.cy, this.state.y],
      });
    }
  }
  save() {
    localStorage.setItem(
      `${this.state.canvas.current.id}`,
      this.state.canvas.current.toDataURL()
    );
  }
  componentDidMount() {
    const ctx = this.ctx();
    var dataURL = localStorage.getItem(`${this.state.canvas.current.id}`) || [];
    var img = new Image();
    img.src = dataURL;
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
    };
  }
  clear() {
    const ctx = this.ctx();
    ctx.clearRect(
      this.state.cx.pop(),
      this.state.cy.pop(),
      this.state.canvas.current.width,
      this.state.canvas.current.height
    );
    // console.log(this.state.cx.length);
    //console.log(this.state.cy.length);
  }
  clearAll(id) {
    const ctx = this.ctx();
    localStorage.removeItem(id);
    ctx.clearRect(
      0,
      0,
      this.state.canvas.current.width,
      this.state.canvas.current.height
    );
  }

  render() {
    return (
      <div>
        <canvas
          id={this.props.id}
          width="288"
          height="257"
          ref={this.state.canvas}
          onMouseDown={(e) => {
            this.setState({
              isDrawing: true,
              x: e.nativeEvent.offsetX,
              y: e.nativeEvent.offsetY,
              cx: [...this.state.cx, this.state.x],
              cy: [...this.state.cy, this.state.y],
            });
          }}
          onMouseMove={this.draw}
          onMouseUp={() => this.setState({ isDrawing: false })}
          onMouseOut={() => this.setState({ isDrawing: false })}
        ></canvas>
        <ButtonGroup className="d-flex justify-content-center sm">
          <Button className="btn btn-success m-auto p-2" onClick={this.save}>
            Guardar
          </Button>
          <Button className="btn btn-success  m-auto p-2" onClick={this.clear}>
            Borrar
          </Button>
          <Button
            className="btn btn-success  m-auto p-2"
            onClick={() => this.clearAll(this.props.id)}
          >
            Borrar todo
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}
