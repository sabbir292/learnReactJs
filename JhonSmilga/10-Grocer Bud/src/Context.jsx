import { useState,useContext, useReducer } from "react";
import React from "react";
import Reducer from "./Reducer";

export const MainContext = React.createContext()

const defaultState= {
    persons: [],
  }

  const MainProvider = ({children})=>{
    const [state,dispatch]= useReducer(Reducer, defaultState)
    const addperson = (name)=>{
      let newPerson = {name, id: new Date().getTime().toString()}
      dispatch({type:'ADD_PERSON',payload:newPerson})
    }


    return(
        <MainContext.Provider
           value= {{...state,addperson}}

        >
          {children}  
        </MainContext.Provider>
    )
}
export default MainProvider