import { applyMiddleware, createStore, Store } from "redux";
import { routerMiddleware } from "react-router-redux";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

const logger = createLogger({
    collapsed: true
});

export const configureStore = (history, initialState) => {
    const store = createStore(
        rootReducer, initialState,
        composeWithDevTools(applyMiddleware(
            thunk, routerMiddleware(history), logger
        ))
    );

    if (module.hot) {
        module.hot.accept("../reducers", () => {
            const nextRootReducer = require("../reducers");
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
};