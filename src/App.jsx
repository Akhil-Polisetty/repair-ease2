import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './Dashboard'
import PredictPrize from './components/PredictPrize'
import RaiseIssue from './components/RaiseIssue'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
// import Logins from './components/dummyclient'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/> */}
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path='/predict' element={<PredictPrize/>}></Route>
        <Route path='/raise' element={<RaiseIssue/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/navbar' element={<NavBar/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
