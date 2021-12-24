import React, { Component } from "react";
import "./spinner.styles.css";
export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div class="container-spinner">
          <div class="circle circle-red"></div>
          <div class="circle circle-blue"></div>
          <div class="circle circle-green"></div>
        </div>
      </div>
    );
  }
}
