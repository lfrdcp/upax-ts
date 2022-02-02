import React, { Fragment } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

interface IProgress {
  show: boolean;
}

const Progress: React.FC<IProgress> = ({ show = false }): JSX.Element =>
  show ? <LinearProgress /> : <Fragment />;

export default Progress;
