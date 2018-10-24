import { AUTH_SIGNIN, AUTH_SIGNOUT } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case AUTH_SIGNIN:
      return action.payload;
    case AUTH_SIGNOUT:
      return {};
    default:
      return state;
  }
};