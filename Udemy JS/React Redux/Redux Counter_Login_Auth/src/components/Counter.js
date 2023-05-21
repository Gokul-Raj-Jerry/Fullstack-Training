import { useSelector, useDispatch } from 'react-redux'; // step-10 import selector to use data to access data
import classes from './Counter.module.css';
import { counterActions } from './../store/counter';

const Counter = () => {
  const dispatch = useDispatch();  // step-12 useDispatch to dispatch action
  const counter = useSelector(state => state.counter.counter);  // step-11 use useSelector(), pass fun as para to get data
  const show = useSelector(state => state.counter.showCounter);

  const incHandler = () => {
    dispatch(counterActions.inc()); // step-13 use same identifiers name inside dispatch
  };

  const inc5Handler = () => {
    dispatch(counterActions.dcr());
  };

  const dcrHandler = () => {
    dispatch(counterActions.inc5(5)); // { type: SOME-UNIQUE_IDENTIFIER, PAYLOAD: 10}
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incHandler}>INC</button>
        <button onClick={dcrHandler}>DCR</button>
        <button onClick={inc5Handler}>ICR by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
