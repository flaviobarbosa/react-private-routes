import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/dashboard' exact>
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default PrivateRoutes;
