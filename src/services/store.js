import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import roootReducer from "./reducers/root-reducers";

const middlewares = [logger];
const store = createStore(
    roootReducer,
    applyMiddleware(...middlewares)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store);

export default store;

// to send data from redux to another component mapstatetoprop
// to receive data from component to redux then use mapdispatchtoprop