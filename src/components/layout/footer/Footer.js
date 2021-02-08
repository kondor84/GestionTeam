import React, { Component } from "react";
import "../footer/footer.css"
export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <h6>&copy; 2021 Ramita Team. Todos los derechos reservados</h6>
        </div>
      </footer>
    );
  }
}

export default Footer;
