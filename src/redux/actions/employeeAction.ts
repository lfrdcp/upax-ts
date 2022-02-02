import { PayloadAction } from '@reduxjs/toolkit';
import { IEmployee } from '../../models/views/IEmployee';

export const SET_EMPLOYEES = 'SET_EMPLOYEES';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const RESET_EMPLOYEES = 'RESET_EMPLOYEES';

export const setEmployeesAction = (payload: PayloadAction<string>) => {
    return {
        type: SET_EMPLOYEES,
        payload: payload,
    };
};

export const addEmployeeAction = (payload: IEmployee) => {
    return {
        type: ADD_EMPLOYEE,
        payload: payload,
    };
};

export const resetEmployeeAction = () => {
    return {
        type: RESET_EMPLOYEES,
    };
};