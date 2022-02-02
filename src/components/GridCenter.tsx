import React from 'react';
import { Grid } from '@material-ui/core';
import { IGridCenter } from '../models/components/IGridCenter';


/**
 * @summary Grid to center, recommended to log in and register
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @param {node} children The content of the component
 * @param {number} [spacing = 0] Space between elements
 * @example
 * <GridCenterX>
 *   <h1>Testing</h1>
 * </GridCenterX>
 */
const GridCenter: React.FC<IGridCenter> = ({
  children,
  spacing = 0,
}): JSX.Element => {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      spacing={spacing}
      style={{ minHeight: '100vh' }}
    >
      {children}
    </Grid>
  );
};

export default GridCenter;
