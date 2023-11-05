import classes from "./Counter.module.css" 
import { useSelector, useDispatch } from 'react-redux'
const Counter = () => {
  const toggleCounterHandler = () => {} 
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  function changeCounter(action) {
    dispatch({ type: action })
  }
  return (
    <main className={classes.counter}>
      <h1>Счётчик</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={() => changeCounter('increment')}>+</button>
        <button onClick={() => changeCounter('decrement')}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Спрятать / Показать</button>
    </main>
  ) 
} 

export default Counter 
