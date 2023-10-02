import * as types from '../constants/userConstants';

const initialState = {
  isRegistering: false,
  isLoggingIn: false,
  userInfo: null,
  isloading: false,
  userData: [],
  error: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
        userInfo: payload,
      };
    case types.REGISTER_FAILURE:
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isRegistering: false,
        isLoggingIn: false,
        error: payload,
      };
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        error: null,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        userInfo: payload,
      };
    case types.Fetch_User_DATA_REQUEST:
      return {
        ...state,
        isloading: true,
        error: null,
      };
    case types.Fetch_User_DATA_SUCCESS:
      return {
        ...state,
        isloading: false,
        userData: payload,
      };
    case types.Fetch_User_DATA_FAILURE:
      return {
        ...state,
        isloading: false,
        error: payload,
        userData: [],
      };
    default:
      return state;
  }
};
