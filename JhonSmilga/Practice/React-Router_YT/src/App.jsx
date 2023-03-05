// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Products from './component/Products'
import Footer from './component/Footer'
import { Routes,Route } from 'react-router'
import Error from './component/Error'
import Item from './component/Item'

const App =()=>{

  return (
    <main className='container'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/products' element={<Products />}/>
        <Route path ='/products/:productId' element={<Item />}/>
        <Route path='*' element= {<Error/>}/>
      </Routes>
      <Footer/>
    </main>
  )
}

export default App
