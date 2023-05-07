import React from "react";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";

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
          <button className='counterButton' onClick={increment}>
            Increment +
          </button>
          <button className='counterButton' onClick={decrement}>
            Decrement -
          </button>
          <button className='counterButton' onClick={AddBy}>
            Add By 10
          </button>
          <button className='counterButton' onClick={Reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
