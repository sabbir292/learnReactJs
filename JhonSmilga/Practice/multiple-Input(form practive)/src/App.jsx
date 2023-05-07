import { useState, useReducer, useEffect } from 'react'
import './index.css'
import reducer from './Reducer'


const defaultState = {
newperson:[],
isShowModal:false,
modalContent:''
}



function App() {
  const [person,setPerson]= useState({
    name:'',
    email:'',
    age:'',
  })
  const[state,dispatch] = useReducer(reducer,defaultState)

  function handleChange(e){
      const{name,value}=e.target
      setPerson({...person,[name]:value})
  }


  function handleSubmit(e){
    e.preventDefault()
    if(person.name && person.email && person.age){
      let newPerson = {...person,id: new Date().getTime().toString()}
      dispatch({type:'ADD_PEOPLE', payload: newPerson})
      setPerson({...person, name:'',email:'',age:''})
    }
    if(!person.name || !person.email || !person.age){
      dispatch({type:'EMPTY_VALUE'})
    }
  }

// const closeModal = ()=>{
//   dispatch({type:"CLOSE_MODAL"})
// }
const removePerson = (id)=>{
  console.log(id)
  dispatch({type:'REMOVE_PERSON', payload:id})
}

// useEffect(()=>{
//   setTimeout(() => {
//     closeModal()
//   },3000);
// })
// console.log(person)
  return(
    <div>
    {state.isShowModal && <h1>{state.modalContent}</h1>}
    <form className='container'>
      <label htmlFor='name'>Name:</label>
      <input type='text' name= 'name' id='name' onChange={handleChange} value={person.name}/>

      <label htmlFor='email'>Email:</label>
      <input type='email' name= 'email' id='email' onChange={handleChange} value={person.email}/>

      <label htmlFor='age'>Age:</label>
      <input type='number' name= 'age' id='age' onChange={handleChange} value={person.age}/>
      <button onClick={handleSubmit}>submit</button>
    </form>

      {state.newperson.map(person=>{
        return(
          <div key = {person.id} className='record'>
            <h1>{person.name}</h1>
            <button onClick = {()=>removePerson(person.id)}className='remove-btn'>Remove</button>
          </div>
        )
      })}
    </div>
  )

}

export default App
