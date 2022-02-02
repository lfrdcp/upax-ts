export interface ISnackbar {
    openX: boolean;
    messageX: string;
    typeX: 'success' | 'info' | 'warning' | 'error' | undefined;
}