import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Navbar from './Navbar'
import { Route,Routes } from 'react-router-dom'
import Products from './Products'
import SharedLayout from './SharedLayout'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<SharedLayout/>}>

          <Route index element = {<Home />}/>
          <Route path='/contact' element = {<Contact />}/>
          <Route path='/about' element = {<About />}/>
          <Route path='/about/:productId' element = {<Products />}/>
          <Route path='*' element = {<Error />}/>
                  
        </Route>
     </Routes>
    </div>
    )
}

export default App