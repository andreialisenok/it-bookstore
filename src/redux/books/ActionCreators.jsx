import * as a from './ActionTypes';

export const addBook = (newBook) => ({
  type: a.ADD_BOOK,
  payload: newBook,
});
