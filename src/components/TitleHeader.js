import React from "react";
import { Header, Icon, Image } from "semantic-ui-react";

const TitleHeader = ({ title, colored }) =>
  <div className={colored ? "title-header colored" : "title-header"}>
    <div className="title-header-name">
      {title}
    </div>
  </div>;

export default TitleHeader;
