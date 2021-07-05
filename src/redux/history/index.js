import { INPUT_HISTORY, DELETE_RECORD } from "../action_constant";
const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case INPUT_HISTORY:
      return [...state, action.data];
    case DELETE_RECORD:
      state.splice(action.data, 1);
      return [...state];
    default:
      return state;
  }
};

