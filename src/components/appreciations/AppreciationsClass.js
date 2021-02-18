import React, { Component } from "react";
import Appreciations from "./Appreciations"
export default class AppreciationsClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appreciation: {
        id: "",
        reason: "",
        date: Date.now(),
        id_grateful: "432432",
      }
    };
  }
  render() {
    return(
      <div>
        <Appreciations appreciationObject = {this.state.appreciation}/>
      </div>
    )
  }
}
