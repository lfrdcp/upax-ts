import React from 'react';
import { ISnackbar } from '../models/hooks/ISnackbar';

/**
 * ## Custom Hook to handle snackbar
 * Handle the state of the snackbar, also returns a function that the component needs
 *
 * @module useSnackbar
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>

 *
 * @example const { handleClose, setSnackbar, snackbar } = useSnackbar();
 */
const useSnackbar = () => {
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ ...snackbar, openX: false });
  };

  const [snackbar, setSnackbar] = React.useState<ISnackbar>({
    openX: false,
    messageX: '',
    typeX: undefined,
  });

  return { handleClose, snackbar, setSnackbar };
};

export default useSnackbar;
