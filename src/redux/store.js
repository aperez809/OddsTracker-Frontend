import {applyMiddleware, createStore} from "redux";

import logger from "redux-logger";
import reducer from "./reducers.js";
import thunk from 'redux-thunk';

const middlewares = [thunk,logger];


export default function configureStore(initialState) {
    const store = createStore(reducer, initialState,
                                       applyMiddleware(...middlewares));
    return store;
}