import { GET_SINGLE_BLOG } from "../constants";
import { AuthApiCall } from "../../helper/api";

export const oldUpdateBlogDispatch = (blogs) => ({
    type: GET_SINGLE_BLOG,
    payload: blogs,
});