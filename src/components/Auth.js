import classes from "./Auth.module.css" 
import { useSelector, useDispatch } from 'react-redux'
import { userActions } from "./toolkit/store/index"
const Auth = () => {
  const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn)
  const dispatch = useDispatch()
  function submitForm(e) {
    e.preventDefault()
    if ((document.querySelector('#email').value.includes('@')) &&
      (document.querySelector('#password').value.length > 8)) {
      dispatch(userActions.logIn())
      document.querySelector('form').reset()
    }
  }
  return (
    !isLoggedIn &&
    <main className={classes.auth}>
      <section>
        <form onSubmit={(e) => submitForm(e)}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Пароль</label>
              <input type="password" id="password" minLength="9" required />
          </div>
          <button>Войти</button>
        </form>
      </section>
    </main>
  ) 
} 

export default Auth 
