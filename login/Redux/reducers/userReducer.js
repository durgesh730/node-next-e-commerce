import * as types from '../constants/userConstants';

const initialState = {
  isRegistering: false,
  userInfo: null,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_REQUEST:
      return {
        ...state,
        isRegistering: true,
        error: null,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        userInfo: action.payload,
      };
    case types.REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
