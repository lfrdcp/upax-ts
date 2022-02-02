import React, { MouseEvent } from 'react';
import {
  Grid,
  TextField as TextFieldMUI,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { IIconColor, ITextFieldPassword } from '../models/components/ITextFieldPassword';
import { IThemeColors } from '../models/components/ITextField';


/**
 * @summary Keyboard input, with dynamic icon and input type
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @param {string} name Input name
 * @param {Array} error Error provided by {@link https://react-hook-form.com/|React Hook Form} library
 * @param {('email'| 'number'| 'text')} typeField Input type
 * @param {string} label Input text
 * @param {func} validations Validations (register) provided by {@link https://react-hook-form.com/|React Hook Form} library
 * @param {func} componentIcon Icon provided by {@link https://material-ui.com/es/components/material-icons/|Material UI icons }
 * @param {string} [defaultValue = ''] Default value in input
 *
 */
const TextFieldPassword: React.FC<ITextFieldPassword> = ({
  name,
  error,
  label,
  setValue,
  rules,
}): JSX.Element => {
  const [data, setData] = React.useState<IIconColor>({
    colorIcon: '#ffffff',
    showPassword: false,
  });

  const themeColors: IThemeColors = {
    primary: '#2196f3',
    error: '#FF4E62',
    inherit: '#ffffff',
  };

  const { ref, ...inputProps } = rules;

  const handleClickShowPassword = () => {
    setData({ ...data, showPassword: !data.showPassword });
  };

  const handleMouseDownPassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={2} sm={1}>
        <LockOutlinedIcon
          style={{ color: error ? themeColors.error : data.colorIcon }}
        />
      </Grid>
      <Grid item xs={10} sm={11}>
        <TextFieldMUI
          onChange={(e: any) => {
            setValue(name, e.target.value);
            console.log(e.target.value);
            !error && setData({ ...data, colorIcon: themeColors.primary });
          }}
          onFocus={() => {
            !error && setData({ ...data, colorIcon: themeColors.primary });
          }}
          onBlur={() => {
            !error && setData({ ...data, colorIcon: themeColors.inherit });
          }}
          error={error ? true : false}
          helperText={error ? error : ''}
          type={data.showPassword ? 'text' : 'password'}
          variant="outlined"
          margin="normal"
          fullWidth
          label={label}
          name={name}
          inputRef={ref}
          {...inputProps}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {data.showPassword ? (
                    <Visibility
                      style={{
                        color: error ? themeColors.error : data.colorIcon,
                      }}
                    />
                  ) : (
                    <VisibilityOff
                      style={{
                        color: error ? themeColors.error : data.colorIcon,
                      }}
                    />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default TextFieldPassword;
