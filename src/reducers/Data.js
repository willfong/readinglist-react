import { DATA_INSERT, DATA_SELECT, DATA_DELETE, DATA_UPDATE, BOOK_READ } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case DATA_INSERT:
      return state;
    case DATA_SELECT:
      return action.payload;
    case DATA_DELETE:
      return state;
    case DATA_UPDATE:
      return state;
    case BOOK_READ:
      return state;
    default:
      return state;
  }
};