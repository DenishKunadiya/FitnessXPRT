import { GET_ALL_NUTRITION, GET_NEW_NUTRITION_POST } from "../constants";
import { AuthApiCall } from "../../helper/api";

export const fetchNutritionss = (payload) => (dispatch) => {
    AuthApiCall("nutrition/get-all-nutrition", "get", payload)
        .then((nutritionAllData) => {
            console.log("all nutrition data", nutritionAllData);
            dispatch({
                type: GET_ALL_NUTRITION,
                payload: nutritionAllData,
            });
        })
        .catch((error) => {
            console.log("error in GET_ALL_NUTRITION action", error.message);
        });
};
export const updateNutritionDispatch = (userData) => ({
    type: GET_NEW_NUTRITION_POST,
    payload: userData,
});