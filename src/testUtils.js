import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import ReduxThunk from 'redux-thunk';

const middleWares = [ReduxThunk];

export const testStore = (initalStore={}) => {
    const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);
    return createStoreWithMiddleware(rootReducer,initalStore);
}