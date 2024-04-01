import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'
const Home = () => {
  // const navigate=Navigate()
  // function handledash()
  // {
  //   navigate('/dashboard')
  // }
  return (
    
        <div className="ul-cont">
            <ul className='ull-cont'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li><Link to="/signin">Sign In</Link></li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </div>
    
  )
}

export default Home