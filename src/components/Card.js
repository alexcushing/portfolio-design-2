import React from "react";
import { Header, Icon, Image, Label } from "semantic-ui-react";

const Card = ({ name, desc, photoLink, color, subtitle, hover, cardWhite }) =>
  <div>
  {cardWhite ? <div className={hover ? "header-card hover-card card-white" : "header-card card-white"}>
    {subtitle ? <Label as="span" color={color} ribbon>{subtitle}</Label> : null}
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
  </div>
  :
  <div className={hover ? "header-card hover-card card-offwhite" : "header-card card-offwhite"}>
    {subtitle ? <Label as="span" color={color} ribbon>{subtitle}</Label> : null}
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
  </div>
}
</div>;

export default Card;
