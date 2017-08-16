import React from "react";
import { Image } from "semantic-ui-react";

const AbtCont = ({ visibSense }) =>
  <div className="about-outer-cont">
    <div className="about-outer">
      <Image
        src="https://avatars3.githubusercontent.com/u/14876141?v=3&u=cd28972994a3b223e59227558bf9537f96c6bd44&s=400"
        size="small"
        shape="circular"
      />
      <div className="about-info">
        <div className="about-info-item about-name">
          Alex Cushing
        </div>
        <div className="about-info-item about-status">
          Software Engineer
        </div>
      </div>

    </div>
    <div className="about-blurb">
      My name is Alex Cushing, I am a full stack developer, working at Reggora,
      a startup in the heart of Boston. I love to write modern
      JavaScript and slick user interfaces. My previous experience includes a
      co-op and an internship with Putnam Investments. For my co-op,
      I worked in web and software development creating interfaces for data
      manipulation, python cycles for automating work tasks, ETL jobs, and more.
      As an intern at Putnam, I worked on the mobile team, creating and
      supporting internal apps for the company to use to enhance business.
    </div>

  </div>;

export default AbtCont;
