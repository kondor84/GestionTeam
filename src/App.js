import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer"
import Routes from "./components/routes/Routes"
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Routes />
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;
