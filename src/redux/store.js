import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import roootReducer from "./root-reducers";

const middlewares = [logger];
const store = createStore(roootReducer, applyMiddleware(...middlewares));

export default store;