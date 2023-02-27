import React from "react"

export default function Header(){
    return(
    <header>
        <nav className="navbar">
           <img src="./React-icon.svg" alt="react-logo"/>
           <ul className= "menu-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
           </ul>
        </nav>
    </header>
    )
}