import React from "react";
import "./Admin.css";
import { SIDEBAR_STATIC_DATA } from "./../../static/Sidebar_Static";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import AdminHeader from "../../components/admin-header/AdminHeader";
function Admin() {
  const { path } = useRouteMatch();

  return (
    <div className="admin--main--container">
      <Sidebar />

      <div className="admin--main--content--container">
        <AdminHeader />
        <Switch>
          {SIDEBAR_STATIC_DATA?.map((sidebar__item) => (
            <Route
              key={sidebar__item.id}
              path={`${path}/${sidebar__item.route}`}
            >
              {sidebar__item.component}
            </Route>
          ))}
        </Switch>
      </div>
    </div>
  );
}

export default Admin;
