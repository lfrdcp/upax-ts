import { Method, AxiosResponse } from 'axios';
import { IErrors } from './IErrors';

export interface IApiAxios {
    (
        method: Method,
        data: any,
        success: (response: AxiosResponse) => void,
        errors: IErrors
    ): void;
}