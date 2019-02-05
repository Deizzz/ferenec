import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { Provider } from "react-redux";
import { hashHistory, Router } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import routes from "./routes";
import { configureStore } from "./store";
import "./index.css";

export let store = configureStore(hashHistory);
export let history = syncHistoryWithStore(hashHistory, store);

render((
    <Provider store={store}>
            <Router routes={routes} history={history}/>
    </Provider>
), document.getElementById("app"));

module.hot.accept();