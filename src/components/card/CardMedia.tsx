import React from 'react';
import { CardMedia as CardMediaMUI } from '@material-ui/core';

interface ICardMedia {
  image: string | undefined;
}

const CardMedia: React.FC<ICardMedia> = ({ image }): JSX.Element => {
  return (
    <CardMediaMUI
      style={{
        height: '222px',
        backgroundSize: 'contain',
      }}
      image={image}
      title="boxdate"
    />
  );
};

export default CardMedia;
