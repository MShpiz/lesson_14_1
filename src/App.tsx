import { useSelector } from 'react-redux'
import './App.css'
import UserList from './components/UserList'
import { RootState } from './store/userStore'
import { BrowserRouter, Route, Routes } from 'react-router'
import UserEditScreen from './components/UserEditScreen'

function App() {

  const tmpUsers = useSelector((state: RootState) => state.userStore.users)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList users={tmpUsers}/>}/>
        <Route path="/user/:idx" element={<UserEditScreen/>}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
