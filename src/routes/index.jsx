import React from "react";
import { IndexRedirect, IndexRoute, Route, Router } from "react-router";
// Containers
import App from "../container/App";
import CabinetRoutes from "./CabinetRoutes";


export default (
    <Router>
        <Route path="/" component={App}>
            <IndexRedirect to="cabinet"/>
            {CabinetRoutes}
        </Route>
    </Router>
);