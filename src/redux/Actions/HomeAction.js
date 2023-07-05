import {GET_BOOKS_DATA} from '../action_types';

export default HomeAction = {
  getBooksData: data => {
    return {
      type: GET_BOOKS_DATA,
      payload: data,
    };
  },
};
