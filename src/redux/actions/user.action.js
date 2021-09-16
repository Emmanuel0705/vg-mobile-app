import axios from 'axios';
import APPUSERS from '../../assets/users';
import {API_BASE_URL} from '../../config/constants';
import {STORE_USER_DATA, CLEAR_USER_DATA} from '../types/user.type';

export const storeUser = (payload) => async (dispatch) => {
  dispatch({
    type: STORE_USER_DATA,
    payload,
  });
};
export const loginUser = (payload) => async (dispatch) => {
  try {
    const login = await axios.post(`${API_BASE_URL}/user/login`, payload);
    const user = login.data?.user;
    if (!user)
      throw new Error(
        login.data?.message || 'something went wrong, please try agian',
      );
    console.log(user);
    dispatch({
      type: STORE_USER_DATA,
      payload: user,
    });
    return {success: true, user};
  } catch (error) {
    console.log();
    return {success: false, message: error.message || 'something went wrong'};
  }
};
export const registerUser = (payload) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/user/register`, payload);
    const user = res.data?.user;
    if (!user)
      throw new Error(
        res.data?.message || 'something went wrong, please try agian',
      );
    dispatch({
      type: STORE_USER_DATA,
      payload: user,
    });
    return {success: true, user};
  } catch (error) {
    return {success: false, message: error.message || 'something went wrong'};
  }
};
export const uploadProfile = (token, payload) => async (dispatch) => {
  try {
    const res = await axios.patch(`${API_BASE_URL}/user`, payload, {
      headers: {authorization: `Bearer ${token}`},
    });
    s;
    const user = res.data?.user;
    if (!user)
      throw new Error(
        res.data?.message || 'something went wrong, please try agian',
      );
    dispatch({
      type: STORE_USER_DATA,
      payload: user,
    });
    return {success: true, user};
  } catch (error) {
    return {success: false, message: error.message || 'something went wrong'};
  }
};
export const clearUserData = () => async (dispatch) => {
  dispatch({
    type: CLEAR_USER_DATA,
  });
};
