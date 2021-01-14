import React, { Component } from "react";
import "./Form.css";

export class Form extends Component {
  state = {
    city: "",
  };

  changeHandler = (e) => {
    this.setState({ city: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.getWeather(this.state.city);
    this.setState({ city: "" });
  };

  render() {
    return (
      <form className="Form" onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="Enter city name..."
          className="form-input"
          onChange={this.changeHandler}
          value={this.state.city}
        />
        <button type="submit" className="form-submit">
          Search
        </button>
      </form>
    );
  }
}

export default Form;
