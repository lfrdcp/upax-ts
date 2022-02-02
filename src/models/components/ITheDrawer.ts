export interface ITheDrawer {
    variant: 'permanent' | 'persistent' | 'temporary' | undefined;
    open?: boolean | undefined;
    onClose?:
    | ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined;
}