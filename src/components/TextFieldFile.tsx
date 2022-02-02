import React from 'react';
import {
  Grid,
  InputAdornment,
  TextField as TextFieldMUI,
} from '@material-ui/core';
import { ITextFieldFile } from '../models/components/ITextFieldFile';
import { IIconColor, IThemeColors } from '../models/components/ITextField';


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
const TextFieldFile: React.FC<ITextFieldFile> = ({
  name,
  error,
  label,
  setValue,
  icon: ComponentIcon,
  rules,
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

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={2} sm={1}>
        <ComponentIcon
          style={{ color: error ? themeColors.error : data.colorIcon }}
        />
      </Grid>
      <Grid item xs={10} sm={11}>
        <TextFieldMUI
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
          type="file"
          variant="outlined"
          margin="normal"
          fullWidth
          label={label}
          name={name}
          inputRef={ref}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ComponentIcon
                  style={{
                    color: error ? themeColors.error : data.colorIcon,
                  }}
                />
              </InputAdornment>
            ),
          }}
          {...inputProps}
        />
      </Grid>
    </Grid>
  );
};

export default TextFieldFile;
