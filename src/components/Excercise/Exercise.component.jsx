import React, { Component } from "react";
import { useState } from "react";
import ExerciseContainer from "../exercise-bottom-container/ExerciseContainer";
import Workout from "../Workout/Workout.component";
import "./Excercise.styles.css";
import PostExercise from "./PostExercise.component";

const Exercise = () => {
  return (
    <>
      <div>
        <Workout />
        <ExerciseContainer />
      </div>
    </>
  );
};

export default Exercise;
