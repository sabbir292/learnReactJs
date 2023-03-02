import { useContext,useState, useEffect, useReducer } from "react";
import React from "react";
import reducer from "./reducer";

const MainContext = React.createContext()
const defaultState={
    cart:[],
    isLoading:false,
    totalItem:0,
    totalPrice:0,
}
const url ='https://fakestoreapi.com/products/'

function AppProvider({children}){
    const [state,dispatch] = useReducer(reducer,defaultState)

    // const noValue = ()=>{
    //     dispatch({type:'NO_VALUE'})
    // }

    const fetchData = async ()=>{
        dispatch({type:'LOADING'})
       
        const response = await fetch(url)
        const data = await response.json()
        const newData = data.map(item=> ({
            ...item, quantity:1,
        }))
        console.log(newData)
        dispatch({type:'DISPLAYITEMS', payload:newData})
    }
    useEffect(()=>{
        fetchData()
    },[])

    const clearCart = ()=>{
        dispatch({type:'CLEAR_CART'})
    }

    const selectQuantity=(id,type)=>{
        // console.log(id,type)
        dispatch({type:'SELECT_QUANTITY',payload:{id,type}})
    }

    const removeItem = (id)=>{
        console.log(id)
        dispatch({type:'REMOVE_ITEM',payload:id})
    }

    useEffect(()=>{
        console.log('cart')
        dispatch({type:'COUNT_TOTAL'})
    },[state.cart])

    return(
        <MainContext.Provider
            value={{
                ...state,
                clearCart,
                selectQuantity,
                removeItem,
                // noValue,

            }}
        >
            {children}
        </MainContext.Provider>
    )
}
export const useGlobalContext = ()=>{
    return useContext(MainContext)
}
export {AppProvider,MainContext}