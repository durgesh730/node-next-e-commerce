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


export const register = (logg) => {
  return (dispatch) => {
    dispatch(registerRequest());

    return axios.post(`${url}/user/signup`, {
      email: logg.email, password: logg.password
    })
      .then(
        (response) => {
          const userInfo = response?.data;
          dispatch(registerSuccess(userInfo));
        },
        (error) => {
          const errorMsg = error.response?.data;
          dispatch(registerFailure(errorMsg));
        }
      );
  };
};


export const loginRequest = () => ({
  type: types.LOGIN_REQUEST,
})
export const loginSuccess = (userInfo) => ({
  type: types.LOGIN_SUCCESS,
  payload: userInfo
})
export const loginFailure = (error) => ({
  type: types.LOGIN_REQUEST,
  payload: error,
})

export const userlogin = (logg) => {
  return (dispatch) => {
    dispatch(loginRequest);

    return axios.post(`${url}/user/login`, {
      email: logg.email, password: logg.password
    })
      .then(
        (response) => {
          const userInfo = response.data
          dispatch(loginSuccess(userInfo));
        },
        (error) => {
          const errorMsg = error.response?.data;
          dispatch(loginFailure(errorMsg));
        }
      )
  }
}