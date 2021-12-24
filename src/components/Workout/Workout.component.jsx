import React, { useState } from "react";
import { connect } from "react-redux";
import { store } from "../../services/store";
import axios from "axios";
import "./Workout.styles.css";
const Workout = () => {
  // const [exerciseName, setExerciseName] = useState();
  // const [desceription, setDesceription] = useState();
  // const [sets, setSets] = useState();
  // const [reps, setReps] = useState();
  const [exerciseData, setExerciseData] = useState({
    posttitle: "",
    exerciseName: "",
    description: "",
    sets: null,
    reps: null,
  });

  const token = store.getState().login.login.access_token;
  console.log("token is here", token);

  const submit = (e) => {
    e.preventDefault();
    console.log("exerciseData is Here", exerciseData);
    axios
      .post(
        "http://192.168.1.109:3000/api/exercise/create-exercise",
        exerciseData,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )

      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
            placeholder="Enter sets here"
            value={exerciseData.sets}
            onChange={(e) => handle(e)}
          />
          <label>Exercise Reps :</label>
          <input
            type="number"
            name="reps"
            id="reps"
            min={1}
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
  console.log("state", state);
  return {
    userData: state.login.login.access_token,
  };
};
export default connect(mapStateToProps)(Workout);
