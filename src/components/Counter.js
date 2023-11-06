import classes from "./Counter.module.css" 
import { useSelector, useDispatch } from 'react-redux'
const Counter = () => {
  const stateObject = useSelector(state => { return { counter: state.counter, isVisibleCounter: state.isVisibleCounter}})
  const dispatch = useDispatch()
  function changeCounter(action, payload) {
    dispatch({ type: action, payload: payload})
  }
  const toggleCounterHandler = (action, payload) => {
    dispatch({ type: action, payload: payload })
  } 
  return (
    <main className={classes.counter}>
      <h1>Счётчик</h1>
      {
        stateObject.isVisibleCounter &&
        <div className={classes.value}>{stateObject.counter}</div>
      }
      {
        stateObject.isVisibleCounter &&
        <div>
          <button onClick={() => changeCounter('CHANGE_VALUE', 1)}>+1</button>
          <button onClick={() => changeCounter('CHANGE_VALUE', 7)}>+7</button>
          <button onClick={() => changeCounter('CHANGE_VALUE', -1)}>-1</button>
          <button onClick={() => changeCounter('CHANGE_VALUE', -7)}>-7</button>
        </div>
      }
      <button onClick={() => toggleCounterHandler('TOGGLE', !stateObject.isVisibleCounter)}>Спрятать / Показать</button>
    </main>
  ) 
} 

export default Counter 
