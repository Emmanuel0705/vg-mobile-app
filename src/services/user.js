import axios from 'axios';
import {API_BASE_URL, PAYSTACK_SK} from '../config/constants';

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
  console.log(token, payload);
  try {
    const res = await axios.patch(`${API_BASE_URL}/user`, payload, {
      headers: {authorization: `Bearer ${token}`},
    });

    const user = res.data;

    if (!user)
      throw new Error(
        res.data?.message || 'something went wrong, please try agian',
      );
    return {success: true, user};
  } catch (error) {
    console.log({error});
    return {success: false, message: error.message || 'something went wrong'};
  }
};
export const uploadKyc = async (token, payload) => {
  try {
    const res = await axios.patch(`${API_BASE_URL}/kyc`, payload, {
      headers: {authorization: `Bearer ${token}`},
    });

    console.log(res.data);
    const kyc = res.data;

    if (!kyc)
      throw new Error(
        res.data?.message || 'something went wrong, please try agian',
      );
    return {success: true, kyc};
  } catch (error) {
    console.log({error});
    return {success: false, message: error.message || 'something went wrong'};
  }
};
export const updateAccount = async (token, payload) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/account`, payload, {
      headers: {authorization: `Bearer ${token}`},
    });

    console.log(res);

    const account = res.data;

    if (!account)
      throw new Error(
        res.data?.message || 'something went wrong, please try agian',
      );
    return {success: true, account};
  } catch (error) {
    console.log({error});
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
export const getAccount = async (token) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/account`, {
      headers: {authorization: `Bearer ${token}`},
    });

    const account = res.data?.account;
    if (!account)
      throw new Error(
        res.data?.message || 'something went wrong, please try agian',
      );
    return {success: true, account};
  } catch (error) {
    return {success: false, message: error.message || 'something went wrong'};
  }
};
export const validateAccount = async (accountNumber, bankCode) => {
  try {
    const res = await axios.get(
      `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`,
      {
        headers: {authorization: `Bearer ${PAYSTACK_SK}`},
      },
    );

    const {status, data} = res.data;
    if (!status)
      throw new Error(
        res.data?.message || 'something went wrong, please try agian',
      );
    return {success: true, data};
  } catch (error) {
    return {success: false, message: error.message || 'something went wrong'};
  }
};
