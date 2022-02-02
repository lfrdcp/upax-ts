import React from 'react';
import { CardHeader as CardHeaderMUI } from '@material-ui/core';
import { ICardHeader } from '../../models/components/ICardHeader';

/**
 * @summary Card header, show title and subtitle, optional handwriting
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @param {string} title Card title
 * @param {string} subtitle Card subtitle
 * @param {bool} [variant=false] Show title in handwritten if true
 *
 * @example
 * <CardHeader
 *  title="Testing title"
 *  subtitle="Testing subtitle"
 * />
 */
const CardHeader: React.FC<ICardHeader> = ({
  title,
  subtitle,
  variant = false,
}: ICardHeader): JSX.Element => {
  return (
    <CardHeaderMUI
      title={title}
      titleTypographyProps={{
        align: 'center',
        color: 'primary',
        variant: variant ? 'h4' : 'h5',
      }}
      subheader={subtitle}
      subheaderTypographyProps={{
        variant: 'subtitle2',
        align: 'center',
      }}
    />
  );
};

export default CardHeader;
