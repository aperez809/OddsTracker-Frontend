import {applyMiddleware, createStore} from "redux";

import logger from "redux-logger";
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(
      rootReducer,
      initialState,
      window.devToolsExtension && window.devToolsExtension()
    );
  
    return store;
}