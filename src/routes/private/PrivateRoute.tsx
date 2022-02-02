import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Squema from './Squema';
import { IRoutes } from '../../models/routes/IRoutes';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

export const PrivateRoute: React.FC<IRoutes> = ({
  component: Component,
  ...rest
}): JSX.Element => {

  const classes = useStyles();

  return (
    <React.Fragment>
      {localStorage.getItem('token') ? (
        <div className={classes.root}>
          <Squema />
          <div className={classes.content}>
            <div className={classes.toolbar}></div>
            <Route
              {...rest}
              component={(props: any): JSX.Element => (
                <Component {...props} />
              )}
            />
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </React.Fragment>
  );
};
