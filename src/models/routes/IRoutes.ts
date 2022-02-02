import React from 'react';

export interface IRoutes {
    exact?: boolean;
    path?: string;
    component: React.ComponentType<any>;
}