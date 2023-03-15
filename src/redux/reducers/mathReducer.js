export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const DIVIDE = "DIVIDE";
export const MULTIPLY = "MULTIPLY";
export const SET_INPUT = "SET_INPUT";

const initialState = {
  result: 0,
  input: 0,
};

export const mathReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        result: state.result + state.input,
      };
    case DECREMENT:
      return {
        ...state,
        result: state.result - state.input,
      };
    case DIVIDE:
      return {
        ...state,
        result: state.result / state.input,
      };
    case MULTIPLY:
      return {
        ...state,
        result: state.result * state.input,
      };
    case SET_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    default:
      return state;
  }
};
