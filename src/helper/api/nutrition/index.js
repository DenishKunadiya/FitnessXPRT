import { AuthApiCall, ApiCall } from "..";
import store from "../../../services/store";
import { updateNutritionDispatch } from "../../../services/actions/getAllNutritionAction";
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
            .then((updateUsersBlog) => {
                console.log("updateUserNutrition", updateUserNutrition);
                //  Dispatch Action to update the user
                // store.dispatch(updateBlogDispatch(updateUsersBlog.data.message));
                resolve();
            })
            .catch(reject);
    });
};