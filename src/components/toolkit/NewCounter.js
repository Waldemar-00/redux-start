import classes from "./Counter.module.css"
import { useSelector, useDispatch } from 'react-redux'
import { toolkitActions }   from "./store/index"
const NewCounter = () => {
  const counter = useSelector(state => state.counter)
  const isVisibleCounter = useSelector(state => state.isVisibleCounter)
  console.log(counter, isVisibleCounter)
  const dispatch = useDispatch()
  function incrementHandler() {
    dispatch(toolkitActions.increment())
  }
  function decrementHandler() {
    dispatch(toolkitActions.decrement())
  }
  function increaseHandler(payload) {
    dispatch(toolkitActions.increase(payload))
  }
  function setVisibleCounter() {
    dispatch(toolkitActions.setVisibleCounter())
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
            <button onClick={incrementHandler}>+1</button>
            <button onClick={() => increaseHandler(7)}>+7</button>
            <button onClick={decrementHandler}>-1</button>
            <button onClick={() => increaseHandler(-7)}>-7</button>
        </div>
      }
      <button onClick={ setVisibleCounter }>Toggle Counter</button>
    </main>
  )
}

export default NewCounter 
