import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from './Home';
import Login from './Login';

const Routes = [
  { path: '/', page: <div>Inicial</div> },
  { path: '/login', page: <Login /> },
  { path: '/home', page: <Home /> },
];

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {Routes.map((route) => {
          return (
            <Route key={route.path} path={route.path} exact>
              {route.page}
            </Route>
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
