import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import LoginView from '../views/auth/login/LoginView';

import DashboardRoutes from './private/DashboardRoutes';
import { PrivateRoute } from './private/PrivateRoute';
import { PublicRoute } from './public/PublicRoute';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/login" component={LoginView} />
        <PrivateRoute path="/" component={DashboardRoutes} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
