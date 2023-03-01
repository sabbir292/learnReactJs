import React, { useState, useContext, useReducer, useEffect } from 'react'
// import CartItem from './CartItem'
import reducer from './Reducer'
import Data from './Data'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()

const defaultState ={
    isLoading : false,
    cart: [],
    total:0,
    amount:0,

}
const AppProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,defaultState)

  const clearCart = ()=>{
    dispatch({type:'CLEAR_CART'})
  }
const removeItem =(id)=>{
  dispatch({type:'REMOVE_ITEM', payload:id})
}
// const increaseAmount = (id)=>{
//   dispatch({type:"INCREASE_AMOUNT", payload:id})
// }
// const decreaseAmount = (id)=>{
//   dispatch({type:"DECREASE_AMOUNT", payload:id})
// }

useEffect(()=>{
  dispatch({type:"COUNT_TOTAL"})
},[state.cart])

const fetchData = async()=>{
  dispatch({type:'SET_LOADING'})
  const response  = await fetch(url)
  const data = await response.json()
  dispatch({type:'DISPLAY_ITEMS', payload:data})
}

const selectAmount = (id,type)=>{
  dispatch({type:'SELECT_AMOUNT', payload:{id,type}})
}
useEffect(()=>{
  fetchData()
},[])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        // increaseAmount,
        // decreaseAmount,
        selectAmount
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export {AppContext, AppProvider}