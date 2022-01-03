import axios from "axios";
import { BASE_URL } from "../../config";
import { store } from "../../services/store";

export const AuthApiCall = (url, method, data = null, headers = {}) => {
    return new Promise((resolve, reject) => {
        const token = store.getState().login.login.access_token;

        axios({
                method,
                url: `${BASE_URL}${url}`,
                data,
                headers: {
                    Authorization: "Bearer " + token,
                    ...headers,
                },
            })
            .then(resolve)
            .catch(reject);
    });
};

export const ApiCall = (url, method, data = null, headers = {}) => {
    return new Promise((resolve, reject) => {
        axios({
                method,
                url: `${BASE_URL}${url}`,
                data,
                headers: {
                    ...headers,
                },
            })
            .then(resolve)
            .catch(reject);
    });
};