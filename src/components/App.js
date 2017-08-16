import React, { Component } from "react";
import Project from "./Project";
import ProjCont from "./ProjectContainer";
import AbtCont from "./AboutContainer";
import SkillsCont from "./SkillsContainer";
import TitleHeader from "./TitleHeader";

class App extends Component {
  state = {
    scrollHeight: 0
  };

  onChange = value => {
    window.history.pushState({ pageTitle: value }, "", value);
  };

  render() {
    return (
      <div className="App">
        <AbtCont visibSense={this.onChange} />
        <div className="back-transition" />
        <SkillsCont visibSense={this.onChange} />
        <div className="front-transition" />
        <ProjCont visibSense={this.onChange} />
      </div>
    );
  }
}

export default App;
