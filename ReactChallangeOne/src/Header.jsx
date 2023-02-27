import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './Header.css'

export default function Header(){
  return(
    <nav className='header'>
        <img src='./src/assets/react.svg' className='logo'/>
        <h2 className='logo-text'>ReactFacts</h2>
        <h3>React Course-Project 1</h3>
    </nav>
  )
}