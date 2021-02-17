import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Team from "../team/teamsCards/Team";
import Bitlogico from "../profile/Bitlogico"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Team}></Route>
        <Route exact path="/usr/profile" component={Bitlogico}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
