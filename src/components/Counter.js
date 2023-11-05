import classes from "./Counter.module.css" 
import { useSelector, useDispatch } from 'react-redux'
const Counter = () => {
  const toggleCounterHandler = () => {} 
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  function changeCounter(action, payload) {
    dispatch({ type: action, payload: payload})
  }
  return (
    <main className={classes.counter}>
      <h1>Счётчик</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={() => changeCounter('CHANGE_VALUE', 1)}>+1</button>
        <button onClick={() => changeCounter('CHANGE_VALUE', 7)}>+7</button>
        <button onClick={() => changeCounter('CHANGE_VALUE', -1)}>-1</button>
        <button onClick={() => changeCounter('CHANGE_VALUE', -7)}>-7</button>
      </div>
      <button onClick={toggleCounterHandler}>Спрятать / Показать</button>
    </main>
  ) 
} 

export default Counter 
