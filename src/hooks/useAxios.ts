import React from 'react';
import API from '../axios/api';
import useAxiosError from '../hooks/useAxiosError';
import useSnackbar from '../hooks/useSnackbar';
import useIsMounted from './useIsMounted';
import axiosCancelToken from '../axios/axiosCancelToken';
import { IApiAxios } from '../models/hooks/IApiAxios';


/**
 * ## Custom Hook to request
 * Request to API REST, manage a snack bar and loading bar
 * Depend on {@link https://github.com/axios/axios/|Axios}
 *
 * @module useAxios
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>

 *
 * @param url api url
 *
 * @example const { apiAxios, snackbar, handleClose, loading } = useAxios('/login');
 */
const useAxios = (url: string) => {
  const { handleClose, setSnackbar, snackbar } = useSnackbar();
  const { checkError } = useAxiosError(setSnackbar);
  const [loading, setloading] = React.useState<boolean>(false);
  const source = axiosCancelToken();
  const isMounted = useIsMounted();
  const isMountedLoad = () => isMounted.current && setloading(false);

  /**
   * @summary Make a request, setter progress bar, validation in case of error and use dynamic success method
   * @memberof module:useAxios
   *
   * @param method Request methods
   * @param data Parameters to send
   * @param success Function if the answer is successful
   * @param errors  Message array if response failed
   *
   * @example apiAxios('post', data, success, errorLogin);
   */
  const apiAxios: IApiAxios = (method, data, success, errors) => {
    isMounted.current && setloading(true);
    API(url, {
      method: method,
      data: data,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      cancelToken: source.token,
    })
      .then((response) => {
        console.log('response.config', response.config);
        success(response);
        isMountedLoad();
      })
      .catch((error) => {
        checkError(error, errors);
        isMountedLoad();
      });
  };

  return { apiAxios, setSnackbar, snackbar, handleClose, loading };
};

export default useAxios;
