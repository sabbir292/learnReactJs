import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between bgprimary px-[26px] py-[36px] h-[14vh] list-none inter items-center mt-auto'>
        <div className='uppercase font-[900] text-[26px]'>#Vanlife</div>
        <li className='flex gap-[12px] font-[600] text-[16px]'>
            <Link to={'/'} >Home</Link>
            <Link to={'/about'} >About</Link>
        </li>
    </nav>
  )
}

export default Navbar
