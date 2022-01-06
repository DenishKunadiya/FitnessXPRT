import { AuthApiCall, ApiCall } from "..";
import store from "../../../services/store";
import {
    newupdateNutritionDispatch,
    updateNutritionDispatch,
} from "../../../services/actions/getAllNutritionAction";
import { oldUpdateNutritionDispatch } from "../../../services/actions/singleNutritionAction";
import { useHistory } from "react-router-dom";
// const history = useHistory();
export const createNutrition = (body) => {
    return new Promise((resolve, reject) => {
        AuthApiCall("nutrition/create-nutrition", "post", body).then(
            (updateUsersNutrition) => {
                store.dispatch(
                    updateNutritionDispatch(updateUsersNutrition.data.message)
                );
            }
        );
    });
};
// export const UpdateNutrition = (body) => {
//     return new Promise((resolve, reject) => {
//         AuthApiCall("nutrition/update-nutrition", "post", body).then(
//             (updateUserNutrition) => {
//                 console.log("updateUserNutrition", updateUserNutrition);
//             }
//         );
//     });
// };

export const updateUserNutrition = (body) => {
    return new Promise((resolve, reject) => {
        AuthApiCall("nutrition/update-nutrition", "post", body)
            .then((updateUsersNut) => {
                console.log("updateUsersNut", updateUserNutrition);
                //  Dispatch Action to update the user
                store.dispatch(updateNutritionDispatch(updateUsersNut.data.message));
                resolve();
            })
            .catch(reject);
    });
};
export const getSingleNutrition = (id) => {
    return new Promise((resolve, reject) => {
        console.log("single nutrition ", id);
        AuthApiCall("nutrition/get-nutrition", "post", { id })
            .then((singleNutrition) => {
                console.log("updateUserNutrition", singleNutrition);
                //  Dispatch Action to update the user
                store.dispatch(oldUpdateNutritionDispatch(singleNutrition));
                resolve();
            })
            .catch(reject);
    });
};
export const deleteUserNutrition = (id) => {
    return new Promise((resolve, reject) => {
        console.log("single nutrition ", id);
        AuthApiCall("nutrition/delete-nutrition", "post", { id })
            .then((singleNutrition) => {
                console.log("updateUserNutrition", singleNutrition);
                //  Dispatch Action to update the user
                store.dispatch(
                    newupdateNutritionDispatch(singleNutrition.data.message)
                );
                resolve();
            })
            .catch(reject);
    });
};