import axios from 'axios';
import * as types from '../constants/userConstants';
import { url } from '@/host';

// Action creators for registration
const registerRequest = () => ({ type: types.REGISTER_REQUEST });
const registerSuccess = (userInfo) => ({ type: types.REGISTER_SUCCESS, payload: userInfo });
const registerFailure = (error) => ({ type: types.REGISTER_FAILURE, payload: error });

export const register = (logg) => (dispatch) => {
  dispatch(registerRequest());

  return axios
    .post(`${url}/user/signup`, {
      email: logg.email,
      password: logg.password,
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

// Action creators for login
const loginRequest = () => ({ type: types.LOGIN_REQUEST });
const loginSuccess = (userInfo) => ({ type: types.LOGIN_SUCCESS, payload: userInfo });
const loginFailure = (error) => ({ type: types.LOGIN_FAILURE, payload: error });

export const userlogin = (logg) => (dispatch) => {
  dispatch(loginRequest());
  return axios
    .post(`${url}/user/login`, {
      email: logg.email,
      password: logg.password,
    })
    .then(
      (response) => {
        const userInfo = response.data;
        dispatch(loginSuccess(userInfo));
      },
      (error) => {
        const errorMsg = error.response?.data;
        dispatch(loginFailure(errorMsg));
      }
    );
};

// Action creators for userData
const UserDataRequest = () => ({ type: types.Fetch_User_DATA_REQUEST });
const UserDataSuccess = (userInfo) => ({ type: types.Fetch_User_DATA_SUCCESS, payload: userInfo });
const UserDataFailure = (error) => ({ type: types.Fetch_User_DATA_FAILURE, payload: error });


// Action creator for fetching user data by token
export const fetchUserDataByToken = () => (dispatch) => {
  dispatch(UserDataRequest());
  axios
    .get(`${url}/user/getuserData/`, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
      },
    })
    .then((resp) => {
      dispatch(UserDataSuccess(resp?.data))
    })
    .catch((err) => {
      const errorMsg = err.response?.data;
      dispatch(UserDataFailure(errorMsg))
    });
};

// Action creators for userData
const UpdateUserAddressRequest = () => ({ type: types.UPDATE_USER_DATA_REQUEST });
const UpdateUserAddressSuccess = (userInfo) => ({ type: types.UPDATE_USER_DATA_SUCCESS, payload: userInfo });
const UpdateUserAddressFailure = (error) => ({ type: types.UPDATE_USER_DATA_FAILURE, payload: error });

export const UpdateUserAddress = (data) => (dispatch) => {
  dispatch(UpdateUserAddressRequest());
  axios
    .put(`${url}/user/AddAddress/`, data, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': "application/json",
      },
    }).then((res) => {
      console.log(res, "error of updating user data")
      dispatch(UpdateUserAddressSuccess(res.data))
    })
    .catch((err) => {
      const errorMsg = err.response?.data;
      dispatch(UpdateUserAddressFailure(errorMsg))
    })
}
