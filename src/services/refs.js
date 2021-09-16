import axios from 'axios';
import {API_BASE_URL} from '../config/constants';

export const getRefs = async (token) => {
  console.log(token);
  try {
    const login = await axios.get(`${API_BASE_URL}/user/refs`, {
      headers: {authorization: `Bearer ${token}`},
    });
    const res = login.data?.refs;

    if (!res)
      throw new Error(
        res.data?.message || 'something went wrong, please try agian',
      );
    return {success: true, res};
  } catch (error) {
    console.log(error.message);
    return {success: false, message: error.message || 'something went wrong'};
  }
};
