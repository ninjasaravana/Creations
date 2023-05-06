import { createStore } from "redux";

const reducerFn = (state: any = { counter: 0 }, action: any) => {
  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DEC") {
    if (state.counter >= 2) {
      return { counter: state.counter - 1 };
    }
    if (state.counter < 2) {
      return { counter: 0 };
    }
  }
  if (action.type === "ADD") {
    return { counter: state.counter + action.payload };
  }
  if (action.type === "RST") {
    return { counter: 0 };
  }
  return state;
};

const reduxStore = createStore(reducerFn);
export default reduxStore;
