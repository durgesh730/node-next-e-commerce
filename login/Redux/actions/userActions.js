import axios from 'axios';
import * as types from '../constants/userConstants';
import { url } from '@/host';

export const registerRequest = () => ({
  type: types.REGISTER_REQUEST,
});

export const registerSuccess = (userInfo) => ({
  type: types.REGISTER_SUCCESS,
  payload: userInfo,
});

export const registerFailure = (error) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
});


export const register = (email, password) => {
  return (dispatch) => {
    dispatch(registerRequest());

    return axios.post(`${url}/user/signup`, { email, password })
      .then(
        (response) => {
          const userInfo = response?.data;
          console.log(userInfo)
          dispatch(registerSuccess(userInfo));
        },
        (error) => {
          const errorMsg = error.response?.data;
          dispatch(registerFailure(errorMsg));
        }
      );
  };
};
