import * as types from '../constants/userConstants';

const initialState = {
  isRegistering: false,
  userInfo: null,
  error: null,
  islogin: false,
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
    case types.LOGIN_REQUEST:
      return {
        ...state,
        islogin: true,
        error: null
      }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        islogin: false,
        userInfo: action.payload,
      }
    case types.REGISTER_FAILURE:
      return {
        ...state,
        islogin: false,
        error: action.payload
      }
    default:
      return state;
  }
};
