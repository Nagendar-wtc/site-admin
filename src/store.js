import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const composeEnhancers =
    process.env.NODE_ENV === "development" && typeof window === "object" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middlewares = [thunk];

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),

);

const store = createStore(
    rootReducer,
    enhancer
);
export default store;