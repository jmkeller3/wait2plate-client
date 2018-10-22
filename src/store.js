import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

import rootReducer from "./reducers";

const middleware = applyMiddleware(thunk, promise(), logger());

export default createStore(rootReducer, middleware);
