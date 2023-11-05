import classes from "./Counter.module.css"
import { Component } from 'react'
import { connect } from 'react-redux'
class Counter extends Component {
  toggleCounterHandler = () => {}
  changeIncrement() {
    return this.props.increment()
  }
  changeDecrement() {
    return this.props.decrement()
  }
  render() {
    return (
      <main className={classes.counter}>
        <h1>Счётчик</h1>
        <div className={classes.value}>{this.props.counter + ' class'}</div>
        <div>
          <button onClick={this.changeIncrement.bind(this)}>+</button>
          <button onClick={this.changeDecrement.bind(this)}>-</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Спрятать / Показать</button>
      </main> 
    )
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT'}),
    decrement: () => dispatch({ type: 'DECREMENT'})
  }
}
export default connect( mapStateToProps, mapDispatchToProps )(Counter) 