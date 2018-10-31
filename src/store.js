import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import { reducer as formReducer } from "redux-form";
import rootReducer from "./reducers";

const middleware = applyMiddleware(thunk, logger);

const reducers = { form: formReducer, app: rootReducer };

const reducer = combineReducers(reducers);

export default createStore(reducer, middleware);
