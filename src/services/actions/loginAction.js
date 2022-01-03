import { LOGIN, UPDATE_PROFILE, USER_LOGOUT } from "../constants";

import axios from "axios";

export const userLoginRequest = (payload) => (dispatch) => {
    return new Promise((resolve, reject) => {
        axios
            .post("http://192.168.0.115:5000/api/user/login", payload)
            .then(
                (loginData) =>
                dispatch({
                    type: LOGIN,
                    payload: loginData.data,
                }),
                resolve()
            )

        .catch((error) => {
            console.log("error in action", error);
            reject();
        });
    });
};

export const updateUserDispatch = (userData) => ({
    type: UPDATE_PROFILE,
    payload: userData,
});

export const logoutAction = () => {
    return {
        type: USER_LOGOUT,
        payload: null,
    };
};