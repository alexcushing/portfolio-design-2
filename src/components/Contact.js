import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class Contact extends Component {
  state = {
    fn: "",
    ln: "",
    msg: ""
  };

  onChange = e => {
    let type = e.target.name;
    let value = e.target.value;
    this.setState({ [type]: value });
  };

  sendMail = e => {
    e.preventDefault();
    window.open(
      `mailto:alexrcushing@gmail.com?subject=message from ${this.state.fn +
        " " +
        this.state.ln}&body=${this.state.msg}`
    );
  };

  render() {
    return (
      <div className="contact-container">
        <Form onSubmit={this.sendMail}>
          <Form.Group unstackable widths={2}>
            <Form.Input
              required
              label="First name"
              name="fn"
              placeholder="First name"
              onChange={this.onChange}
            />
            <Form.Input
              required
              label="Last name"
              name="ln"
              placeholder="Last name"
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group widths={1}>
            <Form.TextArea
              required
              label="Message"
              name="msg"
              placeholder="Message"
              onChange={this.onChange}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Contact;
