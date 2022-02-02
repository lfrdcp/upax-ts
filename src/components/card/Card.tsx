import React from 'react';
import { Card as CardMUI, Grid } from '@material-ui/core';
import CardHeader from './CardHeader';
import { ICard } from '../../models/components/ICard';


/**
 * @summary Main card, show the total card, title and subtitle
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @param {string} titleX Card title
 * @param {string} subtitleX Card subtitle
 *
 * @example
 * <CardMainX
 *  titleX="Testing title"
 *  subtitleX="Testing subtitle"
 * />
 */
const Card: React.FC<ICard> = ({ title, subtitle }: ICard): JSX.Element => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <CardMUI style={{ background: 'transparent', boxShadow: 'none' }}>
        <CardHeader title={title} subtitle={subtitle} variant />
      </CardMUI>
    </Grid>
  );
};

export default Card;
