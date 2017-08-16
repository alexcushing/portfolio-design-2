import React from "react";
import Project from "./Project";

const ProjCont = ({ visibSense }) =>
  <div className="card-outer">
    <Project
      name="prism"
      desc="sample text about proj"
      photoLink="http://www.prsmphoto.com/img/templogo.png"
      color="teal"
    />
    <Project
      name="roomio"
      desc="sample text about proj"
      photoLink=""
      color="red"
    />
    <Project
      name="other"
      desc="sample text about proj"
      photoLink=""
      color="orange"
    />
  </div>;

export default ProjCont;
