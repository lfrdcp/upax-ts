import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import { Container, Grid, Card, CardContent } from '@material-ui/core';

import TextField from '../../../components/TextField';
import TextFieldPassword from '../../../components/TextFieldPassword';
import GridCenter from '../../../components/GridCenter';
import Snackbar from '../../../components/Snackbar';
import Progress from '../../../components/Progress';
import Button from '../../../components/Button';
import CardHeader from '../../../components/card/CardHeader';
import CardMedia from '../../../components/card/CardMedia';

import { emailRule, passwordRule } from '../../../react-hook-form/rules';
import image from '../../../assets/img/logo.png';
import useSnackbar from '../../../hooks/useSnackbar';
import { useDispatch } from 'react-redux';
import { setUserAction } from '../../../redux/actions/userAction';

export type Inputs = {
  email: string;
  password: string;
};

const LoginView: React.FC = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch()


  const defaultValues: Inputs = {
    email: '',
    password: '',
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<Inputs>({
    defaultValues: defaultValues,
  });

  const { handleClose, setSnackbar, snackbar } = useSnackbar();

  const [loading, setLoading] = React.useState<boolean>(false)



  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true)
    if (data.email !== 'upax@email.com') {
      setSnackbar({
        openX: true,
        messageX: 'Email incorrect',
        typeX: 'warning',
      });
      setLoading(false)
    } else {
      setTimeout(() => {
        dispatch(setUserAction(data))
        setSnackbar({
          openX: true,
          messageX: 'Session started',
          typeX: 'success',
        });
        localStorage.setItem('token', 'true');
        localStorage.setItem('email', data.email);
        history.replace('/employees');
        setLoading(true)
      }, 1000);
    }
  };

  return (
    <Container>
      <GridCenter>
        <Grid item xs={12} sm={10} md={6} lg={5} xl={5}>
          <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Snackbar data={snackbar} handleClose={handleClose} />

              <CardHeader
                title="Iniciar sesion"
                subtitle="Bienvenido"
                variant
              />

              <CardContent>
                <CardMedia image={image} />

                <TextField
                  pasteDisable={true}
                  copyDisable={true}
                  defValue={defaultValues.email}
                  error={errors?.email?.message}
                  name="email"
                  type="email"
                  label="Correo electronico*"
                  icon={MailOutlineOutlinedIcon}
                  setValue={setValue}
                  rules={register('email', {
                    ...emailRule,
                  })}
                />

                <TextFieldPassword
                  name="password"
                  label="Contraseña*"
                  error={errors?.password?.message}
                  setValue={setValue}
                  rules={register('password', {
                    ...passwordRule,
                  })}
                />

                <Progress show={loading} />

                <Button type="submit" fullWidth blue text="Iniciar sesion" />
              </CardContent>
            </form>
          </Card>
        </Grid>
      </GridCenter>
    </Container>
  );
};

export default LoginView;
