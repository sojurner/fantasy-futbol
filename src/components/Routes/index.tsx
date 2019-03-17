import React from 'react';
import { Route } from 'react-router-dom';
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
  return routeInfo.map((route, index) => {
    const LoadableImport = Loadable({
      loader: route.routeLoad,
      loading() {
        return <Loading />;
      }
    });
    return (
      <>
        <Route
          key={`routes-${index}`}
          path={`/${route.link}`}
          component={LoadableImport}
        />
      </>
    );
  });
};

export default Routes;
