import React from "react";
import { Header, Icon, Label, Image } from "semantic-ui-react";

const Card = ({
  name,
  desc,
  photoLink,
  color,
  subtitle,
  hover,
  cardWhite,
  otherInfo,
  other
}) =>
  <div
    className={
      hover
        ? cardWhite
          ? "header-card hover-card card-white"
          : "header-card hover-card card-offwhite"
        : cardWhite ? "header-card card-white" : "header-card card-offwhite"
    }
  >
    {subtitle
      ? <Label as="span" color={color} ribbon>
          {subtitle}
        </Label>
      : null}
    <Header as="h2" icon textAlign="center">
      {photoLink === ""
        ? <span><Icon name="users" circular /></span>
        : photoLink ?<Image src={photoLink} alt="photolink" /> : null}
      <Header.Content>
        <div className="inline-link">
          {other.link.length !== 0
            ? <a href={other.link} target="_blank">
                <Icon name="linkify" />
              </a>
            : null}
          {other.location.length !== 0
            ? <div>
                {name}
                <br />
                <h3>
                  {other.location}
                </h3>
              </div>
            : <div>
                {name}
              </div>}
        </div>
      </Header.Content>
    </Header>
    <div className="subheader">
      {desc}
    </div>
    {otherInfo
      ? <div className="card-other">
          {otherInfo.tech.length !== 0
            ? otherInfo.tech.map((name, key) =>
                <div className="tech-name" key={key}>
                  {name}
                </div>
              )
            : null}
        </div>
      : null}
  </div>;

export default Card;
