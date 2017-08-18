import React, { Component } from "react";
import Typist from "react-typist";

class Terminal extends Component {
  state = {
    closed: false,
    closing: false,
    opening: false,
    full: false,
    hidden: false,
    wiggle: false,
    tada: false
  };

  wiggle = (e) => {
    e.preventDefault();
    this.setState({wiggle: true})
    setTimeout(()=> {
      this.setState({wiggle: false})
    }, 700);

  }

  tada = (e) => {
    e.preventDefault();
    this.setState({tada: true})
    setTimeout(()=> {
      this.setState({tada: false})
    }, 700);

  }

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
          : <div className={this.state.wiggle ? "Term-App wiggle" : this.state.tada ? "Term-App tada" : "Term-App"}>
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
                  <span className="x-out bar-button" onClick={this.wiggle}>x</span>
                  <span className="expand bar-button" onClick={this.tada}>
                    +
                  </span>
                  <span className="minus-down bar-button" onClick={this.hide}>
                    -
                  </span>
                </div>
                <Typist stdTypingDelay={.5}>
                  <div name="term" id="term-textarea" className="term-textarea">
                    <span className="run">./Alex_Cushing</span>
                    <br />
                    <span className="term-text">
                      Welcome to my new portfolio!<br />
                      I am a front end engineer from the Boston area. 
                    </span>
                    <br />
                    <span className="term-text">
                      check out my{" "}
                      <a href="https://github.com/alexcushing" target="_blank" rel="noopener noreferrer">
                        <u>Github</u>
                      </a>
                       {" "}and{" "}
                      <a
                        href="https://www.linkedin.com/in/alexandercushing/"
                        target="_blank"
                        rel="noopener noreferrer"
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

