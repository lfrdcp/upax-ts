import React from 'react';
import { Button as ButtonMUI, ButtonProps } from '@material-ui/core';
import { IButton } from '../models/components/IButton';

const Button: React.FC<IButton & ButtonProps> = ({
  red,
  blue,
  text,
  ...rest
}): JSX.Element => (
  <ButtonMUI
    variant="contained"
    style={
      red
        ? {
            color: '#fff',
            background: 'linear-gradient(45deg, #FF4E62 30%, #FE6B8B 90%)',
          }
        : blue
        ? {
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          }
        : {}
    }
    {...rest}
  >
    {text}
  </ButtonMUI>
);

export default Button;
