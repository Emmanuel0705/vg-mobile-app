import axios from 'axios';
import {API_BASE_URL} from '../config/constants';

export const loginUser = async (payload) => {
  try {
    const login = await axios.post(`${API_BASE_URL}/user/login`, payload);
    const user = login.data?.user;
    if (!user)
      throw new Error(
        login.data?.message || 'something went wrong, please try agian',
      );
    user.token = login.data.token;
    console.log(login.data);
    return {success: true, user};
  } catch (error) {
    console.log();
    return {success: false, message: error.message || 'something went wrong'};
  }
};
export const registerUser = async (payload) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/user`, payload);
    const user = res.data?.user;
    if (!user)
      throw new Error(
        res.data?.message || 'something went wrong, please try agian',
      );
    user.token = res.data.token;
    return {success: true, user};
  } catch (error) {
    return {success: false, message: error.message || 'something went wrong'};
  }
};
export const uploadProfile = async (token, payload) => {
  try {
    const res = await axios.patch(`${API_BASE_URL}/user`, payload, {
      headers: {authorization: `Bearer ${token}`},
    });

    const user = res.data?.user;
    if (!user)
      throw new Error(
        res.data?.message || 'something went wrong, please try agian',
      );
    return {success: true, user};
  } catch (error) {
    return {success: false, message: error.message || 'something went wrong'};
  }
};
export const authUser = async (token) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/user/auth`, {
      headers: {authorization: `Bearer ${token}`},
    });

    const user = res.data?.user;
    if (!user)
      throw new Error(
        res.data?.message || 'something went wrong, please try agian',
      );
    return {success: true, user};
  } catch (error) {
    return {success: false, message: error.message || 'something went wrong'};
  }
};
