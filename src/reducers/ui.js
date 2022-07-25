import { fromJS } from "immutable";
import { SET_LOADING } from "../actions/types";

// de esta manera con fromJS se vuelve inmutable
const initialState = fromJS({
  loading: false,
});

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return state.setIn(["loading"], fromJS(action.payload));
    }
    default:
      return state;
  }
};
