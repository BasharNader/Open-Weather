import React, { Component } from "react";
import './Form.css';

export class Form extends Component {
  render() {
    return <form className="Form">
      <input type="text" placeholder="Enter city name..." className="form-input" />
      <button type="submit" className="form-submit">
         Search
      </button>
    </form>;
  }
}

export default Form;
