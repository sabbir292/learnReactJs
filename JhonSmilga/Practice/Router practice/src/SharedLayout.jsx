import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import { Link,Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default SharedLayout
