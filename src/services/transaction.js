import axios from 'axios';
import {API_BASE_URL} from '../config/constants';

export const getTransactions = async (token) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/transaction`, {
      headers: {authorization: `Bearer ${token}`},
    });
    const transactions = res.data;
    console.log({transactions});
    return {success: true, transactions};
  } catch (error) {
    return {success: false, message: error.message || 'something went wrong'};
  }
};
export const approveTransaction = async (token, payload) => {
  try {
    const res = await axios.post(
      `${API_BASE_URL}/transaction/fund-wallet`,
      payload,
      {
        headers: {authorization: `Bearer ${token}`},
      },
    );
    const transactions = res.data;
    console.log({transactions});
    return {success: true, transactions};
  } catch (error) {
    console.log({error});
    return {success: false, message: error.message || 'something went wrong'};
  }
};
