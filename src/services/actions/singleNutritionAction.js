import { GET_SINGLE_NUTRITION } from "../constants";
import { AuthApiCall } from "../../helper/api";

export const oldUpdateNutritionDispatch = (nutrition) => ({
    type: GET_SINGLE_NUTRITION,
    payload: nutrition,
});