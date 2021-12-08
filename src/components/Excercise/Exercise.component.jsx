import React, { Component } from "react";
import "./Excercise.styles.css";
export default class Exercise extends Component {
  render() {
    return (
      <>
        <div>
          <div className="container exercise-wrapper">
            <input
              type="email"
              placeholder="enter your exercise"
              className="exercise-input"
            />
          </div>
          <div className="container">
            <div className="row mt-5 border py-5">
              <div className="col-12 d-flex justify-content-center">
                <button className="btn-group">day-1</button>
                <button className="btn-group">day-2</button>
                <button className="btn-group">day-3</button>
                <button className="btn-group">day-4</button>
                <button className="btn-group">day-5</button>
              </div>
              <div className="col-12 mt-2 d-flex justify-content-center">
                <button className="btn-group">day-1</button>
                <button className="btn-group">day-2</button>
                <button className="btn-group">day-3</button>
                <button className="btn-group">day-4</button>
                <button className="btn-group">day-5</button>
              </div>
            </div>
          </div>

          <div className="container d-flex justify-content-center mt-4">
            <button className="add-exercise">add exercise</button>
          </div>
        </div>
      </>
    );
  }
}
