import React from 'react';
import { Snackbar as SnackbarMUI } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { ISnackbar } from '../models/components/ISnackbar';

/**
 * @summary Dynamic snackbar, provide a message after a request
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @param {Object} data The data general contain the message, type and boolean snackbar
 * @param {string} data.messageX Snackbar message
 * @param {('success'| 'warning'| 'info'| 'error')} data.typeX Snackbar type
 * @param {bool} data.openX The const true, to show the snackbar
 * @param {func} handleClose Funct to handle the const openX
 *
 * @example
 * <SnackbarX
 *  data={snackbar}
 *  handleClose={handleClose}
 * />
 */



const Snackbar: React.FC<ISnackbar> = ({ data, handleClose }): JSX.Element => {
  const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  return (
    <SnackbarMUI
      open={data.openX}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <Alert onClose={handleClose} severity={data.typeX}>
        {data.messageX}
      </Alert>
    </SnackbarMUI>
  );
};

export default Snackbar;
