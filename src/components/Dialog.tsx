import React from 'react';
import { Dialog as DialogMUI, DialogContent, Slide } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import { IDialog } from '../models/components/IDialog';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const Dialog: React.FC<IDialog> = ({
  open,
  setOpen,
  children,
}): JSX.Element => {
  return (
    <DialogMUI
      open={open}
      onClose={() => setOpen(false)}
      keepMounted
      TransitionComponent={Transition}
    >
      <DialogContent>{children}</DialogContent>
    </DialogMUI>
  );
};

export default Dialog;
