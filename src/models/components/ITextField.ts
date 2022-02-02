import React from 'react';

export interface ITextField {
    name: string;
    error: any;
    type: string;
    label: string;
    setValue: any;
    icon: React.ElementType;
    defValue: any;
    rules: any;
    pasteDisable?: boolean;
    copyDisable?: boolean;
}


export interface IIconColor {
    colorIcon: string;
}

export interface IThemeColors {
    primary: string;
    error: string;
    inherit: string;
}