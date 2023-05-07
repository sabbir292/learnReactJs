import React from 'react'
import { useContext } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import MainProvider from './Context'

const List = () => {
  const data = useContext(MainContext)
  console.log(data)
  return(
        <article className='grocery-item'>
            <p className='title'></p>
            <div className='btn-container'>
                <button type='button' className='edit-btn'>{FaEdit}</button>
                <button type='button' className='delete-btn'>{FaTrash}</button>
            </div>
        </article>
  )
}

export default List