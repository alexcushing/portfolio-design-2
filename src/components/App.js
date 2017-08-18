import React from "react";
import ProjCont from "./ProjectContainer";
import AbtCont from "./AboutContainer";
import SkillsCont from "./SkillsContainer";
import ExpCont from "./ExperienceContainer";

const App = () =>
  <div className="App">
    <AbtCont />
    <div className="back-transition" />
    <SkillsCont />
    <div className="front-transition" />
    <ProjCont />
    <div className="back-transition" />
    <ExpCont />
  </div>;

export default App;
