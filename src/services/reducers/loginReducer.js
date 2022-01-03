import localStorage from "redux-persist/es/storage";
import { LOGIN, UPDATE_PROFILE, USER_LOGOUT } from "../constants";
const initialState = {
    login: null,
    // IsAuth: false,
};
export const loginUser = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                login: action.payload,
            };

        case UPDATE_PROFILE:
            return {
                ...state,
                login: {
                    ...state.login,
                    user: action.payload,
                },
            };
        case USER_LOGOUT:
            return {
                state: null,
                login: {
                    user: localStorage.getItem("persist:root"),
                },
            };
        default:
            return state;
    }
};