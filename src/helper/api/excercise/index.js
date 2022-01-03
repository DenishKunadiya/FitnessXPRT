import { AuthApiCall, ApiCall } from "..";

export const createExercise = (body) => {
    return new Promise((resolve, reject) => {
        AuthApiCall("exercise/create-exercise", "post", body);
    });
};