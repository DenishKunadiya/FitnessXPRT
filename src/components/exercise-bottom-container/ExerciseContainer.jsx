import React, { useState } from "react";
// import Workout from "../Workout/Workout.component";
import "./exercisecontainer.styles.css";
import { connect } from "react-redux";
const ExerciseContainer = () => {
  const [sets, setSets] = useState({
    sets: null,
    reps: null,
  });
  return (
    <div>
      <div className="container exercise-container d-flex justify-content-center">
        <div className="row mt-5 py-5 week-day-wrapper ">
          <div className="col-12 d-flex justify-content-around flex-wrap">
            {/* {sets.sets.map((idx) => { */}
            <button className="btn-group-exercise">set-1</button>
            <button className="btn-group-exercise">set-2</button>
            <button className="btn-group-exercise">set-3</button>
            <button className="btn-group-exercise">set-4</button>
            {/* })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state in exercise container", state);
  return {
    userData: state,
  };
};

export default connect(mapStateToProps)(ExerciseContainer);
