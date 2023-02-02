import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementBYAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const [incerementA, setIncrementA] = useState(0);
  const addvalue = Number(incerementA) || 0;
  //   console.log(count)
  const dispatch = useDispatch();

  const handleaction = () => {
    // e.preventdefault()
    console.log("i am clicked")
    
    dispatch(incrementBYAmount(addvalue));
  };
  return (
    <section>
      <p>{count}</p>

      <div
        className="d-flex mt-3"
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <button
          className="btn btn-success mr-8"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="btn btn-danger "
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button className="btn btn-primary " onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
      <input
        value={incerementA}
        type="text"
        onChange={(e) => setIncrementA(e.target.value)}
      />
      <div>
        <button
          className="btn btn-primary mt-5 "
          onClick={() => handleaction()}
        >
          INCREMENT
        </button>
      </div>
    </section>
  );
};
export default Counter;
