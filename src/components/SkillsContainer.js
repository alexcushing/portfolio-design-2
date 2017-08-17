import React from "react";
import ReactStars from "react-stars";

const Skill = ({ name, level }) =>
  <div className="skill-item">
    <span className="skill-name">{name}</span>
    <span className="skill-rating">
      <ReactStars
        count={5}
        size={21}
        edit={false}
        value={level}
        color2={"#ffd700"}
      />
    </span>
  </div>;

const SkillsCont = () =>
  <div className="skills-outer">
    <div className="header-title skills-title">
        <div className="bold">Skills</div>
    </div>
    <div className="skills-list">
      <Skill name="JavaScript" level={5} />
      <Skill name="JQuery" level={5} />
      <Skill name="HTML" level={5} />
      <Skill name="CSS / SCSS" level={5} />
      <Skill name="React.js" level={4.75} />
      <Skill name="Python / Django" level={4.5} />
      <Skill name="C / C++" level={4} />
      <Skill name="MongoDB" level={4} />
      <Skill name="Node.js" level={3.75} />
      <Skill name="Vue.js" level={3.5} />
      <Skill name="SQL" level={3} />
    </div>
  </div>;

export default SkillsCont;
