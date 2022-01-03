import { AuthApiCall, ApiCall } from "..";
import { updateUserDispatch } from "../../../services/actions/loginAction";
import store from "../../../services/store";

const loginUser = (body) => {
    //  Return Promise
    //  Call API
    //  Dispatch Action
    //  Send Resolve Promise
    //  Put the Catch, If any issue then send Reject Promise
};

export const signUpUser = (body) => {
    return new Promise((resolve, reject) => {
        ApiCall("user/register", "post", body)
            .then((signUpUser) => {
                //  Dispatch Action to update the user
                store.dispatch(updateUserDispatch(signUpUser.data.data));
                resolve();
            })
            .catch(reject);
    });
};

const getUserProfile = (body) => {
    //  Return Promise
    //  Call API
    //  Dispatch Action
    //  Send Resolve Promise
    //  Put the Catch, If any issue then send Reject Promise
};

export const updateUserProfile = (body) => {
    return new Promise((resolve, reject) => {
        AuthApiCall("user/update-user", "post", body)
            .then((updateUserData) => {
                //  Dispatch Action to update the user
                console.log("update user data", updateUserData);
                store.dispatch(updateUserDispatch(updateUserData.data.data));
                resolve();
            })
            .catch(reject);
    });
};