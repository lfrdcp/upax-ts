import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { AxiosResponse } from 'axios';

import { DatePicker } from "@material-ui/pickers";
import PersonIcon from '@material-ui/icons/Person';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Card, CardContent, Divider, Grid, Typography } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux';

import Progress from '../../components/Progress'
import TextField from '../../components/TextField';
import ButtonSubmit from '../../components/ButtonSubmit';
import CardHeader from '../../components/card/CardHeader';
import Snackbar from '../../components/Snackbar';

import useAxios from '../../hooks/useAxios';
import { firstAndSecondNameRule } from '../../react-hook-form/rules';
import { errorCreateEmployee } from '../../messages/errors';

import { addEmployeeAction } from '../../redux/actions/employeeAction';

import DateFnsUtils from "@date-io/date-fns";
import esLocale from "date-fns/locale/es";
import { IEmployee } from '../../models/views/IEmployee';


type IEmployeeReducer = {
    employeeReducer: {
        employees: Array<IEmployee>
    }
};

const defaultValues: IEmployee = {
    id: 0,
    name: '',
    last_name: '',
    birthday: null,
};


const CreateEmployee = () => {
    const dispatch = useDispatch();

    const selectEmployeeReducer = (state: IEmployeeReducer) => state.employeeReducer
    const employeeReducer = useSelector(selectEmployeeReducer);

    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
        reset
    } = useForm<IEmployee>({
        defaultValues: defaultValues,
    });


    const [birthDate, setBirthDate] = React.useState<Date | null>(new Date());
    const { format } = require("date-fns");

    const formatDate = (date: Date | null) => format(date, "yyyy-MM-dd");
    // Para llevar a cabo las peticiones, se creo un customhook, el cual maneja
    // los errores http comunes, ademas de una barra de carga, asi como una 
    // alerta flotante llamada Snackbar, de esa manera solo pasamos los parametros necesarios
    // a la funcion apiAxios

    const {
        apiAxios,
        loading,
        snackbar,
        setSnackbar,
        handleClose
    } = useAxios('examen/employees/alfredo_castaneda');

    const onSubmit: SubmitHandler<IEmployee> = (data) => {
        console.log("data", data)
        let params = {
            name: data.name,
            last_name: data.last_name,
            id: employeeReducer.employees.length + 1,
            birthday: formatDate(birthDate)
        }

        const successResponse = (response: AxiosResponse) => {
            reset()
            dispatch(addEmployeeAction(params));
            setSnackbar({
                openX: true,
                messageX: 'Employee created successfully',
                typeX: 'success',
            });
        }

        apiAxios('post', params, successResponse, errorCreateEmployee);
    };

    return (
        <Grid item sm={12} md={6} lg={6} >
            <Snackbar data={snackbar} handleClose={handleClose} />
            <Card>
                <CardHeader
                    title="Create an employee"
                    subtitle="Enter the necessary data to create an employee"
                />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CardContent>

                        <TextField
                            defValue={defaultValues.name}
                            error={errors?.name?.message}
                            name="name"
                            type="text"
                            label="Name*"
                            icon={PersonIcon}
                            setValue={setValue}
                            rules={register('name', {
                                ...firstAndSecondNameRule,
                            })}
                        />

                        <TextField
                            defValue={defaultValues.last_name}
                            error={errors?.last_name?.message}
                            name="last_name"
                            type="text"
                            label="Last Name*"
                            icon={PersonIcon}
                            setValue={setValue}
                            rules={register('last_name', {
                                ...firstAndSecondNameRule,
                            })}
                        />

                        <Divider />
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                            <Typography variant="subtitle2">Enter the date of your birthday</Typography>

                            <DatePicker
                                autoOk
                                orientation="landscape"
                                variant="static"
                                openTo="date"
                                value={birthDate}
                                format="yyyy/MM/dd"
                                fullWidth={true}
                                onChange={(newValue) => setBirthDate(newValue)}
                            />
                        </MuiPickersUtilsProvider>
                        <Progress show={loading} />
                        <ButtonSubmit text="Create employee" />

                    </CardContent>
                </form>
            </Card>
        </Grid>
    )
}

export default CreateEmployee