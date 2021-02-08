import React, { Component } from "react";
import "../header/header.css"
export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar mb-3">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1 text-success">
              Ramita team
            </span>
          </div>
        </nav>
      </div>
    );
  }
}
