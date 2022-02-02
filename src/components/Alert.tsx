import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import { Alert as AlertMUI } from '@material-ui/lab';
import { IAlert } from '../models/components/IAlert';


/**
 * @summary `Dynamic alert`, focused to give information about user input
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @param {string} details Alert details / message
 * @param {('success'| 'warning'| 'info'| 'error')} type Alert type
 *
 * @example
 * <AlertX
 *  details="Error 500"
 *  type="warning"
 * />
 */
const Alert: React.FC<IAlert> = ({ details, color }): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Collapse in={details ? true : false}>
        <AlertMUI variant="filled" severity={color}>
          {details}
        </AlertMUI>
      </Collapse>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1, 0, 1),
    },
  },
}));

export default Alert;
