import React, { useState } from "react";
import { connect } from "react-redux";
import { store } from "../../services/store";
import "./Workout.styles.css";
import { createExercise } from "../../helper/api/excercise";
const Workout = () => {
  const [exerciseData, setExerciseData] = useState({
    posttitle: "",
    exerciseName: "",
    description: "",
    sets: null,
    reps: null,
  });

  const token = store.getState().login.login.access_token;
  // console.log("token is here", token);

  const submit = (e) => {
    e.preventDefault();
    console.log("exerciseData is Here", exerciseData);
    createExercise(exerciseData);
  };
  function handle(e) {
    e.preventDefault();
    const newdata = { ...exerciseData };
    newdata[e.target.id] = e.target.value;
    setExerciseData(newdata);
    console.log("exercise data", newdata);
  }

  return (
    <>
      <div className="mt-5 wrapper-box">
        <form className="box" onSubmit={submit} method="POST">
          <h1>Exercise</h1>
          <label>Post name :</label>
          <input
            type="text"
            name="posttitle"
            id="posttitle"
            placeholder="Enter post name"
            value={exerciseData.posttitle}
            onChange={(e) => handle(e)}
          />
          <label>Exercise Name :</label>
          <input
            type="text"
            name="exerciseName"
            id="exerciseName"
            placeholder="Enter Exercise name"
            value={exerciseData.exerciseName}
            onChange={(e) => handle(e)}
          />
          <label>Description</label>
          <textarea
            className="mb-4"
            name="description"
            id="description"
            placeholder="Enter some description"
            cols="1"
            rows="1"
            value={exerciseData.description}
            onChange={(e) => handle(e)}
          ></textarea>
          <label>Enter Sets:</label>
          <input
            type="number"
            name="sets"
            id="sets"
            min={1}
            max={4}
            placeholder="Enter sets here"
            value={exerciseData.sets}
            onChange={(e) => handle(e)}
          />
          <label>Exercise Reps :</label>
          <input
            type="number"
            name="reps"
            id="reps"
            min={10}
            max={10}
            placeholder="Enter reps here"
            value={exerciseData.reps}
            onChange={(e) => handle(e)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log("state in workout", state);
  return {
    userData: state.login.login.access_token,
  };
};
export default connect(mapStateToProps)(Workout);
