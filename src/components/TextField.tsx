import React from 'react';
import { Grid, TextField as TextFieldMUI } from '@material-ui/core';
import { IIconColor, ITextField, IThemeColors } from '../models/components/ITextField';

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
const TextField: React.FC<ITextField> = ({
  name,
  error,
  type,
  label,
  setValue,
  icon: ComponentIcon,
  defValue = '',
  rules,
  pasteDisable = false,
  copyDisable = false
}): JSX.Element => {
  const [data, setData] = React.useState<IIconColor>({
    colorIcon: '#ffffff',
  });

  const themeColors: IThemeColors = {
    primary: '#2196f3',
    error: '#FF4E62',
    inherit: '#ffffff',
  };

  const { ref, ...inputProps } = rules;


  const onPaste = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    return false;
  };

  const onCopy = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    return false;
  };

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={2} sm={1}>
        <ComponentIcon
          // color={error ? 'error' : data.colorIcon}
          style={{ color: error ? themeColors.error : data.colorIcon }}
        />
      </Grid>
      <Grid item xs={10} sm={11}>
        <TextFieldMUI
          {...(pasteDisable ? { onPaste: onPaste } : {})}
          {...(copyDisable ? { onCopy: onCopy } : {})}
          onChange={(e: any) => {
            setValue(name, e.target.value);
            console.log(e.target.value);
            !error && setData({ colorIcon: themeColors.primary });
          }}
          onFocus={() => {
            !error && setData({ colorIcon: themeColors.primary });
          }}
          onBlur={() => {
            !error && setData({ colorIcon: themeColors.inherit });
          }}
          error={error ? true : false}
          helperText={error ? error : ''}
          type={type}
          variant="outlined"
          margin="normal"
          fullWidth
          label={label}
          name={name}
          defaultValue={defValue}
          inputRef={ref}
          {...inputProps}
        />
      </Grid>
    </Grid>
  );
};

export default TextField;
