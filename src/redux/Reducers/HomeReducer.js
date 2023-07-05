import {GET_BOOKS_DATA} from '../action_types';

const initialState = {
  booksArray: [],
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS_DATA:
      state = {...state, booksArray: action.payload};
      break;

    default:
      break;
  }
  return state;
}
