import React, { Component } from "react";
import "./spinner.styles.css";
export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="spinner">
          <p className="loading">l</p>
          <p className="loading">o</p>
          <p className="loading">a</p>
          <p className="loading">d</p>
          <p className="loading">i</p>
          <p className="loading">n</p>
          <p className="loading">g</p>
        </div>
      </div>
    );
  }
}
