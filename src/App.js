import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/layout/header/Header";
import Team from "./components/Team/teamsCards/Team";
import Footer from "./components/layout/footer/Footer"
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Team />
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;
