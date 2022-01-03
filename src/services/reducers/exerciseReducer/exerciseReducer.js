import { GET_EXERCISE } from "../../constants";

const initialState = {
    getExercise: [],
};
export const userExercise = (state = initialState, action) => {
    switch (action.type) {
        case GET_EXERCISE:
            return {
                ...state,
                userExercise: action.payload,
            };

        default:
            return state;
    }
};