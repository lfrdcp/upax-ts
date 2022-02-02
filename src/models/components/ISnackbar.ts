import React from 'react';
export interface ISnackbar {
    data: {
        openX: boolean;
        messageX: string;
        typeX: 'success' | 'info' | 'warning' | 'error' | undefined;
    };
    handleClose: (event?: React.SyntheticEvent, reason?: string) => void;
}