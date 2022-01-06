import {
    GET_ALL_BLOG,
    GET_ALL_NUTRITION,
    NEW_CREATED_BLOG,
    GET_NEW_NUTRITION_POST,
    GET_SINGLE_NUTRITION,
} from "../constants";

const initialState = {
    getSingleNutrition: [],
};

export const singleNutrition = (state = initialState, action) => {
    switch (action.type) {
        case GET_SINGLE_NUTRITION:
            return {
                ...state,
                getSingleNutrition: action.payload,
            };

        default:
            return state;
    }
};