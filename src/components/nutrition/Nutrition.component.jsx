import React, { Component } from "react";
import "./nutrition.styles.css";
const Nutrition = () => {
  const steps = 0;
  // render() {
  return (
    <div className="container mt-3">
      <div className="input-group mb-3 ">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Enter Your Nutrition Name
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Nutrition Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Enter Your Ingredients
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Ingredients Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <h3>Procedure :</h3>
      <div className="container">
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Step : {steps + 1}</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            cols="2"
          ></textarea>
        </div>
      </div>

      <div className="container d-flex justify-content-center flex-column nutrition-btn-container">
        <button className="bg-warning mb-3 btn-grad">Add Step</button>
        <button className="bg-success btn-grad">Submit</button>
      </div>
    </div>
  );
};
// }
export default Nutrition;
