import React, { useState, useEffect, useReducer,useContext } from 'react'
// import Reducer from './Reducer'
// import List from './List'
// import Alert from './Alert'
import MainProvider from './Context'
import { MainContext } from './Context'

function App() {
  const [name, setName]= useState("")
  const {persons,addperson} = useContext(MainContext)
  const handleChange=(e)=>{
    setName(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(name){
      
    }
    
  }

  return(
    <MainProvider>
   <>
      <section className='container' onSubmit={()=>handleSubmit(name)}>
        <form className='grocery-form'>
          <h3>Grocery bud</h3>
          <div className='form-control'>
            <input type='text' name='text' placeholder='e.g. eggs' onChange={handleChange} value={name}/>
            <button className='submit-btn'>Submit</button>
          </div>
        </form>
        <div className='grocery-container'>
          {/* {Reducer.persons.map(person=>{
            return <List />
          })} */}
        </div>
      </section>
      </>
    </MainProvider>
  )
}

export default App