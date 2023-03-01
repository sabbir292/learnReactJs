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
    cart: Data,
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
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
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