import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { useHistory } from 'react-router-dom';

// import useReduxReset from '../../hooks/useReduxReset';
/**
 * @summary Button to log out and send to log in
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @example <TheButtonLogOut />
 */
const TheButtonLogOut: React.FC = (): JSX.Element => {
  const history = useHistory();
  //   const { dispatchReset } = useReduxReset();

  const handleLogout = () => {
    localStorage.removeItem('token');
    // dispatchReset();
    history.replace('/login');
  };

  return (
    <Tooltip title="Cerrar sesion" aria-label="cerrar sesion">
      <IconButton aria-label="cerrar sesion" onClick={handleLogout}>
        <PowerSettingsNewIcon style={{ color: 'white' }} />
      </IconButton>
    </Tooltip>
  );
};

export default TheButtonLogOut;
