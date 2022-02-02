import { PayloadAction } from '@reduxjs/toolkit';

import {
  SET_USER,
  RESET_USER,
} from '../actions/userAction';

const data = {
  user: {
    name: '',
    email: '',
  }
};

const userReducer = (state = data, action: PayloadAction) => {
  switch (action.type) {
    

    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case RESET_USER:
      return data;

    default:
      return state;
  }
};

export default userReducer;
