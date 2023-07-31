import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "../actions/counterAction";

export const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementAction());
  };

  const handleDecrement = () => {
    dispatch(decrementAction());
  };

  const handleReset = () => {
    dispatch(resetAction());
  };
  return (
    <>
      <h3>Count: {count}</h3>
      <div className="btn">
        <Button variant="primary" onClick={handleIncrement}>
          Increment
        </Button>
        <Button
          variant="secondary"
          onClick={handleDecrement}
          disabled={count < 1}
        >
          Decrement
        </Button>

        <Button variant="success" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </>
  );
};
