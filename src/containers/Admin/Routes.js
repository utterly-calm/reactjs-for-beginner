import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from './childRoutes';

export default () =>
  <Switch>
    {routes.map((route, i) => (
      // <RouteWithSubRoutes key={i} {...route} />
      <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )} />
    ))}
  </Switch>;
