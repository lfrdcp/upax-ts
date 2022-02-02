import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IRoutes } from '../../models/routes/IRoutes';

export const PublicRoute: React.FC<IRoutes> = ({
  component: Component,
  ...rest
}): JSX.Element => {
  return (
    <React.Fragment>
      {!localStorage.getItem('token') ? (
        <Route {...rest} component={(props: any) => <Component {...props} />} />
      ) : (
        <Redirect to="/" />
      )}
    </React.Fragment>
  );
};
