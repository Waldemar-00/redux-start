import Counter from "./components/toolkit/NewCounter" 
import Header from "./components/Header"
import Auth from "./components/Auth"
import UserProfile from "./components/UserProfile"
import { useSelector } from 'react-redux'
function App() {
  const isProfile = useSelector(state => state.userReducer.isLoggedIn)
  return (
    <div>
      <Header />
      <Auth />
      {
        isProfile &&
        <UserProfile />
      }
      <Counter />
    </div>
  ) 
}
export default App 
