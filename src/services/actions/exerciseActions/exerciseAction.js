import { GET_EXERCISE } from "../../constants";

import { AuthApiCall } from "../../../helper/api";

export const fetchExercise = (payload) => (dispatch) => {
    AuthApiCall("exercise/get-all-exercise", "get", payload)
        .then((getExercise) => {
            console.log("all exercise", getExercise);
            dispatch({
                type: GET_EXERCISE,
                payload: getExercise,
            });
        })
        .catch((error) => {
            console.log("error in GET_EXERCISE action", error.message);
        });
};