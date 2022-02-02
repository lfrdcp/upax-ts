import React from 'react';
import { IconButton } from '@material-ui/core';
import { Tooltip as TooltipMUI, TooltipProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ITooltip } from '../models/components/ITooltip';


/**
 * @summary Button to show tooltipo
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @example <TooltipX />
 */
const Tooltip: React.FC<ITooltip> = ({
  msg,
  fn,
  icon: ComponentIcon,
  color = 'inherit',
}): JSX.Element => {
  return (
    <BootstrapTooltip title={msg} placement="top" arrow>
      <IconButton onClick={fn}>
        <ComponentIcon color={color} />
      </IconButton>
    </BootstrapTooltip>
  );
};

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: '#4EB5FF',
  },
  tooltip: {
    backgroundColor: '#4EB5FF',
  },
}));

const BootstrapTooltip: React.FC<TooltipProps> = (props): JSX.Element => {
  const classes = useStylesBootstrap();
  return <TooltipMUI arrow classes={classes} {...props} />;
};

export default Tooltip;
