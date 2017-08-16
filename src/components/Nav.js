import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Contact from "./Contact";

const customStyles = {
  content: {
    top: "20%",
    left: "25%",
    right: "25%",
    bottom: "20%"
  }
};

class Nav extends Component {
  state = {
    selected: "",
    menuItems: ["Contact"],
    modalIsOpen: false
  };

  componentDidMount() {
    this.select();
  }
  componentWillReceiveProps() {
    this.select();
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  select = value => {
    console.log("hey val: ", value);
    if (value) {
      this.state.menuItems.includes(value.name)
        ? this.setState({ selected: value.name })
        : console.log("error");
      if (value.name == "Contact") {
        this.openModal();
      }
    }
  };

  render() {
    return (
      <div className="title">
        <div className="left">Alex <span className="bold">Cushing</span></div>
        <div className="right">
          <ul className="menu-list">
            {this.state.menuItems.map((name, key) =>
              <li
                key={key}
                onClick={() => this.select({ name })}
                className="menu-list-item"
              >
                {name}
              </li>
            )}
          </ul>
        </div>
        <Modal
          shouldCloseOnOverlayClick={true}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          <Button onClick={this.closeModal} icon="window close" />
          <br />
          <br />
          <Contact />
        </Modal>
      </div>
    );
  }
}

export default Nav;
