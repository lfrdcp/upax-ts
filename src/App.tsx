import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './material-ui/theme';

import { Provider } from 'react-redux';
import store from './redux/store';

import AppRouter from './routes/AppRouter';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
