import React from 'react';
import { GridSpacing } from '@material-ui/core';

export interface IGridCenter {
    spacing?: GridSpacing | undefined;
    children: React.ReactNode;
}