import React, { Component } from "react";
import Typist from "react-typist";
import { Image } from "semantic-ui-react";

class Terminal extends Component {
  state = {
    closed: false,
    closing: false,
    opening: false,
    full: false,
    hidden: false
  };

  hide = () => {
    if (this.state.hidden) {
      this.setState({ opening: true });
      setTimeout(() => {
        this.setState({ hidden: false, opening: false, full: false });
      }, 140);
    } else {
      this.setState({ closing: true });
      setTimeout(() => {
        this.setState({ hidden: true, closing: false });
      }, 140);
    }
  };

  render() {
    return (
      <div>
        {this.state.closed || this.state.hidden
          ? null
          : <div className="Term-App">
              <div
                className={
                  this.state.full && this.state.closing
                    ? "term-container-small"
                    : this.state.full
                      ? "term-container-full"
                      : this.state.closing
                        ? "term-container-small"
                        : "term-container"
                }
              >
                <div className="status-bar">
                  <span className="x-out bar-button">x</span>
                  <span className="expand bar-button">
                    +
                  </span>
                  <span className="minus-down bar-button">
                    -
                  </span>
                </div>
                <Typist stdTypingDelay={1}>
                  <div name="term" id="term-textarea" className="term-textarea">
                    <span className="run">./Alex_Cushing</span>
                    <br />
                    <span className="term-text">
                      Welcome to my new portfolio!<br />
                      I am a front end engineer from the Boston area. 
                    </span>
                    <br />
                    <span className="term-text">
                      checkout my{" "}
                      <a href="https://github.com/alexcushing" target="_blank">
                        <u>Github</u>
                      </a>
                       {" "}and{" "}
                      <a
                        href="https://www.linkedin.com/in/alexandercushing/"
                        target="_blank"
                      >
                        <u>LinkedIn</u>
                      </a>
                      !
                    </span>
                  </div>
                </Typist>
              </div>
            </div>}
        {this.state.hidden
          ? <span
              onClick={this.hide}
              className={this.state.opening ? "bubbleBig" : "bubble"}
            >
              {this.state.opening ? "" : ">_"}
            </span>
          : null}
      </div>
    );
  }
}

export default Terminal;

