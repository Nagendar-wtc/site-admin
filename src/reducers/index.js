import { combineReducers } from "redux";

import configReducer from "./configReducer";
import staticReducer from "./staticReducer";

const rootReducer = combineReducers({
    configReducer,
    staticReducer
});

export default rootReducer;
