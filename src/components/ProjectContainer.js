import React from "react";
import Card from "./Card";

const ProjCont = () =>
  <div className="card-outer-container">
    <div className="header-title proj-title">
      <div className='bold'>Projects</div>
    </div>
    <div className="card-outer">
      <Card
        name="prism"
        desc="&quot;Prism&quot; is a photography based web application with an emphasis on a minimalistic aesthetic, tag based search functionality, and a portfolio style user profile. The goal is to provide photographers with a professional and interactive environment to share their work and connect with others."
        photoLink="http://www.prsmphoto.com/img/templogo.png"
        color="teal"
        hover={true}
        cardWhite={true}
        otherInfo={{tech : ['MongoDB', 'Express.js', 'JQuery', 'Node.js', 'JavaScript', 'SCSS']}}
        other={{link: 'http://prsmphoto.com', location:''}}
      />
      <Card
        name="roomio"
        desc="&quot;Roomio&quot; is a webapp that allows users to create and visit rooms they may be interested in (ie music / programming etc) and start topics inside of those rooms to chat in. A user may visit the JavaScript room and create a topic titled &quot;how to start learning JS?&quot;, and then live chat with other users about this"
        photoLink="https://i.imgur.com/NDUQHZm.jpg"
        color="red"
        hover={true}
        cardWhite={true}
        otherInfo={{tech : ['React.js', 'Laravel', 'SCSS', 'Socket.io', 'MySQL']}}
        other={{link: 'https://github.com/alexcushing/roomio', location:''}}
      />
      <Card
        name="Admin Portal"
        desc="While working as a co-op at Putnam Investments, I worked on a single page application for administration users to access multiple tables. The page displayed necessary information cleanly, and allowed administrative users to edit, add, or delete information seamlessly."
        photoLink="https://image.flaticon.com/icons/svg/204/204296.svg"
        color="orange"
        hover={true}
        otherInfo={{tech : ['JavaScript', 'JQuery' ,'Django', 'CSS']}}
        cardWhite={true}
        other={{link: '', location:''}}
      />
    </div>
  </div>;

export default ProjCont;
