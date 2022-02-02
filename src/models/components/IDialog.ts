import React from 'react';

export interface IDialog {
    open: boolean;
    setOpen: (open: boolean) => void;
    children: React.ReactNode;
}