// import axios from "axios";
import { ADD_BLOG_FORM } from "../constants";

export const collectBlogFormData = (data) => {
    return {
        type: ADD_BLOG_FORM,
        data: data,
    };
};