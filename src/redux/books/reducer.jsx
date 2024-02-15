import * as a from './ActionTypes';

const initialState = [];
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default booksReducer;
