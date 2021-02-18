import React, { Component } from "react";

export default class Canva extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0, canvas: React.createRef(), isDrawing: false };
    this.draw = this.draw.bind(this);
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
      });
    }
  }

  render() {
    return (
      <div>
        <canvas
          id="canva"
          width="288"
          height="257"
          ref={this.state.canvas}
          onMouseDown={(e) => {
            this.setState({
              isDrawing: true,
              x: e.nativeEvent.offsetX,
              y: e.nativeEvent.offsetY,
            });
          }}
          onMouseMove={this.draw}
          onMouseUp={() => this.setState({ isDrawing: false })}
          onMouseOut={() => this.setState({ isDrawing: false })}
        ></canvas>
      </div>
    );
  }
}
