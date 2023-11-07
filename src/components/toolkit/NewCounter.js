import classes from "./Counter.module.css"
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from "./store/counter"
const Counter = () => {
  const counter = useSelector(state => state.counterReducer.counter)
  const isVisibleCounter = useSelector(state => state.counterReducer.isVisibleCounter)
  const dispatch = useDispatch()
  function changeCounterHandler(payload) {
    dispatch(counterActions.changeCounter(payload))
  }
  function setVisibleCounter() {
    dispatch(counterActions.setVisibleCounter())
  }
  return (
    <main className={classes.counter}>
      <h1>Counter</h1>
      {
        isVisibleCounter &&
        <div className={classes.value}>{counter}</div>
      }
      {
        isVisibleCounter &&
        <div>
            <button onClick={() => changeCounterHandler(1)}>+1</button>
            <button onClick={() => changeCounterHandler(7)}>+7</button>
            <button onClick={() => changeCounterHandler(-1)}>-1</button>
            <button onClick={() => changeCounterHandler(-7)}>-7</button>
        </div>
      }
      <button onClick={ setVisibleCounter }>Toggle Counter</button>
    </main>
  )
}

export default Counter 
