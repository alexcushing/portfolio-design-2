import React from "react";
import { Header, Icon, Image, Label } from "semantic-ui-react";

const Project = ({ name, desc, photoLink, color }) =>
  <div className="header-card">
    <Label as="span" color={color} ribbon>{name}</Label>
    <Header as="h2" icon textAlign="center">
      {photoLink == ""
        ? <Icon name="users" circular />
        : <img src={photoLink} />}
      <Header.Content>
        {name}
      </Header.Content>
    </Header>
    <div className="subheader">
      {desc}
    </div>
  </div>;

export default Project;
