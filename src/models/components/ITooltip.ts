import React from 'react';

export interface ITooltip {
    msg: string;
    fn: () => void;
    color: string;
    icon: React.ElementType;
}