import { LOGIN } from "../constants";
const initialState = {
    login: null,
};
export const loginUser = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                login: action.payload,
            };
        default:
            return state;
    }
};