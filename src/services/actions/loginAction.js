import { LOGIN } from "../constants";

import axios from "axios";

export const userLoginRequest = (payload) => (dispatch) => {
    axios
        .post("http://192.168.1.109:3000/api/user/login", payload)
        .then((loginData) =>
            dispatch({
                type: LOGIN,
                payload: loginData.data,
            })
        )
        .catch((error) => {
            console.log(error);
        });
};