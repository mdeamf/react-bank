import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Routes = [
  { path: '/', page: <div>Inicial</div> },
  { path: '/login', page: <div>Login</div> },
  { path: '/home', page: <div>Home</div> },
];

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {Routes.map((route) => {
          return (
            <Route path={route.path} exact>
              {route.page}
            </Route>
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
