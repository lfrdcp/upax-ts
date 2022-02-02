import React from 'react';
import {
  makeStyles,
  Drawer,
  Divider,
  Avatar,
  ListItemText,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';
import TheList from './TheList';
import { ITheDrawer } from '../../models/components/ITheDrawer';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: theme.palette.getContrastText('#C3C9E8'),
    backgroundColor: '#C3C9E8',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



/**
 * @summary Component found on the left side of the page
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>

 *
 * @example
 * <TheDrawer
 *  variant="permanent"
 *  open={true}
 * />
 *
 * <TheDrawer
 *  variant="temporary"
 *  open={openDrawer}
 *  onClose={openDrawerAction}
 * />
 */
const TheDrawer: React.FC<ITheDrawer> = (props): JSX.Element => {
  const classes = useStyles();
  //   const userReducer = useSelector((state) => state.userReducer);
  return (
    <Drawer
      className={classes.drawer}
      variant={props.variant}
      open={props.open}
      anchor="left"
      onClose={props.onClose}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar}>
        <div className={classes.root}>

          <ListItem>
            <ListItemIcon>
              <Avatar className={classes.avatar}>U</Avatar>
            </ListItemIcon>
            <ListItemText primary="UPAX" />
          </ListItem>
        </div>
      </div>
      <Divider />
      <TheList />
    </Drawer>
  );
};

export default TheDrawer;
