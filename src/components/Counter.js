import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <main>
      <h1>Redux Counter</h1>
      <div>{counter}</div>
      <button onClick={incrementHandler}>Increment Counter</button>
      <button onClick={decrementHandler}>Increment Counter</button>
    </main>
  );
};

export default Counter;
