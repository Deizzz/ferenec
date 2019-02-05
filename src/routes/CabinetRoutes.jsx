import React from "react";
import { IndexRoute, Route, IndexRedirect } from "react-router";
import Main from "../scenes/Main";

const CabinetRoutes = (
    <Route name="Личный кабинет" path="cabinet">
        <IndexRedirect to="main"/>
        <Route name="Главная" path="main" component={Main}/>
    </Route>
);

export default CabinetRoutes;