import { INPUT_HISTORY } from "../../actions/action_constant";
const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case INPUT_HISTORY:
      return [...state, action.data];
    default:
      return state;
  }
};

