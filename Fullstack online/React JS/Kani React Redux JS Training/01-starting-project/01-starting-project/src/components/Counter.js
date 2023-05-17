import { useSelector, useDispatch } from 'react-redux'; // Step-6 
import classes from './Counter.module.css';

const Counter = () => {

  // Dispatching Actions From Inside Components. useDispatch Hooks
  const dispatch = useDispatch()

  // Counter Using Redux Data in React Components  useSelectior gives access to store
  const counter = useSelector(state => state.counter)  // Step-6  Use redux data in react component using use Selector
  const show = useSelector(state => state.showCounter)  // useSelector Hooks

  const incHandler = () => {
    dispatch({ type: 'inc' }) // step-7  Dispatch action in component
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
