import axios from "axios";
import { ADD_BLOG_FORM } from "../constants";

// export function saveBlogData() {
//     return axios.post("");
// }

export const collectBlogFormData = (data) => {
    return {
        type: ADD_BLOG_FORM,
        data: data,
    };
};