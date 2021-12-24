import React, { Component } from "react";
import Workout from "../Workout/Workout.component";
import "./exercisecontainer.styles.css";

export default class ExerciseContainer extends Component {
  render() {
    return (
      <div>
        <div className="container exercise-container d-flex justify-content-center">
          <div className="row mt-5 py-5 week-day-wrapper ">
            <div className="col-12 d-flex justify-content-center">
              <button className="btn-group-exercise">day-1</button>
              <button className="btn-group-exercise">day-2</button>
              <button className="btn-group-exercise">day-3</button>
              <button className="btn-group-exercise">day-4</button>
              <button className="btn-group-exercise">day-5</button>
            </div>
            <div className="col-12 mt-2 d-flex justify-content-center">
              <button className="btn-group-exercise">day-1</button>
              <button className="btn-group-exercise">day-2</button>
              <button className="btn-group-exercise">day-3</button>
              <button className="btn-group-exercise">day-4</button>
              <button className="btn-group-exercise">day-5</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
