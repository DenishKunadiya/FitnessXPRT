import {
    GET_ALL_BLOG,
    GET_ALL_NUTRITION,
    NEW_CREATED_BLOG,
    GET_NEW_NUTRITION_POST,
    UPDATED_NUTRITION,
} from "../constants";

const initialState = {
    getnutrition: [],
};
export const allNutrition = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_NUTRITION:
            return {
                ...state,
                getnutrition: action.payload,
            };
        case GET_NEW_NUTRITION_POST:
            return {
                ...state,
                getnutrition: {
                    ...state,
                    getnutrition: action.payload,
                },
            };
        case UPDATED_NUTRITION:
            return {
                ...state,
                getnutrition: {
                    ...state,
                    getnutrition: action.payload,
                },
            };
        default:
            return state;
    }
};