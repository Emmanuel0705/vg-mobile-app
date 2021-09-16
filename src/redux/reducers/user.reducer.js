import {STORE_USER_DATA, CLEAR_USER_DATA} from '../types/user.type';

const INITIAL_STATE = {
  data: {
    kyc: null,
    account: null,
    refs: null,
    transactions: [],
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_USER_DATA:
      return {...state, data: action.payload};
    case CLEAR_USER_DATA:
      return {...state, data: INITIAL_STATE.data};
    default:
      return state;
  }
};

export default userReducer;
