import React, { Component } from "react";
import { teamArray } from "../teamArray";
import Member from "../teamsCards/Member";
import { Row} from "react-bootstrap";
export class Team extends Component {
  constructor(props) {
    super(props);
    this.state = { team: [] };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  getTeam(team) {
    this.setState(() => ({ team: team }));
  }
  componentDidMount() {
    let dataFromLS = JSON.parse(localStorage.getItem('ramita')) || []
    if (!dataFromLS.length) {
      localStorage.setItem("ramita", JSON.stringify(teamArray));
      let dataFromLS = JSON.parse(localStorage.getItem("ramita"));
      this.getTeam(dataFromLS);
    }else{
      this.getTeam(dataFromLS);
    }
  }
  render() {
    return (
      <Row>
        {this.state.team.map((member) => (
          <Member
            team={this.state.team}
            member={member}
            key={member.id}
          />
        ))}
      </Row>
    );
  }
}

export default Team;
