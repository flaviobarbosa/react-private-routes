import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import About from '../pages/About';

const PublicRoutes = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Login />
      </Route>
      <Route path='/login' exact>
        <Login />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='*'>
        <Redirect to='/login' />
      </Route>
    </Switch>
  );
};

export default PublicRoutes;
