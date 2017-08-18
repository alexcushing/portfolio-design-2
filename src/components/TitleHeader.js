import React from "react";

const TitleHeader = ({ title, colored }) =>
  <div className={colored ? "title-header colored" : "title-header"}>
    <div className="title-header-name">
      {title}
    </div>
  </div>;

export default TitleHeader;
