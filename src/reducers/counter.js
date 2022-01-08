import * as actionTypes from "../actions";

const counter = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + 1;
    case actionTypes.DECREMENT:
      return state - 1;
    case actionTypes.ADD5:
      return state + 5;
    case actionTypes.SUB5:
      return state - 5;
    default:
      return state;
  }
};

export default counter;
