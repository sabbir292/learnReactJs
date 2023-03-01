import React, { useContext } from 'react'
import { useGlobalContext } from './Context'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {
  const {isLoading} = useGlobalContext()
  if (isLoading){
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App