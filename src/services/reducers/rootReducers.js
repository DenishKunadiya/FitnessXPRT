import { combineReducers } from "redux";
import { loginUser } from "../reducers/loginReducer";
import { allBlog } from "./blogReducer";
import { allNutrition } from "./getAllNutritionReducer";
import { userExercise } from "./exerciseReducer/exerciseReducer";
import { singleBlog } from "./singleBlogReducer";
import { singleNutrition } from "./getSingleNutritionReducer";
export default combineReducers({
    login: loginUser,
    allBlog,
    allNutrition,
    userExercise,
    singleBlog,
    singleNutrition,
});