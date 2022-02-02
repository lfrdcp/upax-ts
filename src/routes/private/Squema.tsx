import React from 'react';
import { Hidden } from '@material-ui/core';
import TheNavbar from '../../components/the/TheNavbar';
import TheDrawer from '../../components/the/TheDrawer';

const Squema: React.FC = (): JSX.Element => {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);

  const openDrawerAction = (): void => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <React.Fragment>
      <TheNavbar openDrawerAction={openDrawerAction} />
      <Hidden mdDown>
        <TheDrawer variant="permanent" open={true} />
      </Hidden>
      <Hidden lgUp>
        <TheDrawer
          variant="temporary"
          open={openDrawer}
          onClose={openDrawerAction}
        />
      </Hidden>
    </React.Fragment>
  );
};

export default Squema;
