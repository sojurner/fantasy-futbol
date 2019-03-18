import React from 'react';
import { Values } from 'redux-form-website-template';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../Loading';

const routeInfo = [
  { name: 'Home', link: '', routeLoad: () => import('../Home') },
  {
    name: 'Register',
    link: 'register',
    routeLoad: () => import('../Register')
  }
  // { name: 'Login', link: 'login', routeLoad: () => import('../Login') },
  // { name: 'Browse', link: 'players', routeLoad: () => import('../Players') }
];

const Routes = () => {
  const routePaths = routeInfo.map((route, index) => {
    const LoadableImport = Loadable({
      loader: route.routeLoad,
      loading() {
        return <Loading />;
      }
    });
    return (
      <Route
        key={`routes-${index}`}
        exact
        path={`/${route.link}`}
        component={LoadableImport}
      />
    );
  });
  return <Switch>{routePaths}</Switch>;
};

export default Routes;
