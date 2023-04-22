import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  // Dispatching Actions From Inside Components
  const dispatch = useDispatch()

  // Counter Using Redux Data in React Components  useSelectior gives access to store
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)

  const incHandler = () => {
    dispatch({ type: 'inc' })
  }

  const inchighhandler = () => {
    dispatch({ type: 'incby5', amount: 10 })
  }

  const dcrHandler = () => {
    dispatch({ type: 'dcr' })
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'toogle' })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <h1>counter: </h1>
      <div>
        <button onClick={incHandler}>PLUS</button>
        <button onClick={dcrHandler}>MINUS</button>
        <button onClick={inchighhandler}>INC 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
