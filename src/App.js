import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./reducers/counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="App container mt-5 text-center">

        <h2 className="mb-3">React Js Redux Store with Slice State Example</h2>
        
        <p className="h1">{count}</p>

        <button
          onClick={() => {
            dispatch(increment());
          }}
          className="me-2 btn btn-primary"
        >
          Increment
        </button>

        <button
          onClick={() => {
            dispatch(decrement());
          }}
          className="me-2 btn btn-danger"
        >
          Decrement
        </button>

      </div>
    </>
  );
};

export default App;
