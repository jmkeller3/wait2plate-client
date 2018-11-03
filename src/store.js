import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import { reducer as formReducer } from "redux-form";
import rootReducer from "./reducers";

const middleware = applyMiddleware(thunk, logger);

const reducers = { form: formReducer, app: rootReducer };

const reducer = combineReducers(reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(middleware));

export default store;
