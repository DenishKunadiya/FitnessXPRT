import { ADD_BLOG_FORM } from "../constants";

const initialState = {
    blogData: [],
};
export default function blogFormInput(state = initialState, action) {
    switch (action.type) {
        case ADD_BLOG_FORM:
            return {
                ...state,
                blogData: action.data,
            };
            break;
        default:
            return state;
    }
}