import classes from "./Counter.module.css" 
import { useSelector } from 'react-redux'
const Counter = () => {
  const toggleCounterHandler = () => {} 
  const counter = useSelector(state => state.counter)
  return (
    <main className={classes.counter}>
      <h1>Счётчик</h1>
      <div className={classes.value}>{ counter }</div>
      <button onClick={toggleCounterHandler}>Спрятать / Показать</button>
    </main>
  ) 
} 

export default Counter 
