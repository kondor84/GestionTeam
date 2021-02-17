import React, { Component } from "react";
import Profile from "./Profile";
import imageTest from "../../imageTest/emmawatson.jpg";
export default class Bitlogico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      image: { imageTest },
      phoneNumber: "",
    };
  }
  render() {
    return (
      <div>
        <Profile bitlogico={this.state} />
      </div>
    );
  }
}
