import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
// function Counter() {
const Counter: React.FC = () => {
  const counter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const AddBy = () => {
    dispatch({ type: "ADD", payload: 10 });
  };
  const Reset = () => {
    dispatch({ type: "RST" });
  };
  return (
    <div className='parent'>
      <div className='container'>
        <h2>COUNTER APP</h2>
        <h1>{counter}</h1>
        <div className='buttonDiv'>
          <button onClick={increment}>Increment +</button>
          <button onClick={decrement}>Decrement -</button>
          <button onClick={AddBy}>Add By 10</button>
          <button onClick={Reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
