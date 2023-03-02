import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './Navbar'
import Cart from './Cart'
import { useGlobalContext } from './Context'



function App() {
 const {isLoading,clearCart}= useGlobalContext()

  if(isLoading){
    return(
      <div className='loading'>
      <h1>Loading...</h1>
    </div>
      )
  }
  return (
    <main className='container'>
        <header className="navbar">
            <Navbar />
        </header>
        <section className='section-container'>
          <Cart />
        </section>
        <footer className='footer'>
          <button 
            className='btn clearAll'
            onClick={()=> clearCart()}
            >Clear Cart</button>
        </footer>
    </main>
  )
}

export default App
