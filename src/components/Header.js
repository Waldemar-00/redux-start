import classes from "./Header.module.css" 
import { useSelector, useDispatch } from 'react-redux'
import { userActions } from "./toolkit/store/index"
const Header = () => {
  const isProFile = useSelector(state => state.userReducer.isLoggedIn)
  const dispatch = useDispatch()
  function getOut() {
    dispatch(userActions.logOut())
  }
  return (
    <header className={classes.header}>
      <h1>Redux</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/">О нас</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
          {
            isProFile &&
            <>
            <li>
              <a href="/">Профиль</a>
            </li>
            <li>
              <button onClick={getOut}>Выйти</button>
            </li>
            </>
          }
        </ul>
      </nav>
    </header>
  ) 
} 

export default Header 
