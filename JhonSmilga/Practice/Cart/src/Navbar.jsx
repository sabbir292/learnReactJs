
import { FaCartPlus,FaMinusSquare,FaPlusSquare } from "react-icons/fa";
import { useGlobalContext } from "./Context";
 export default function Navbar() {
    const {totalItem}= useGlobalContext()
    return (
        
            <nav className="nav-items">
                <div className="logo-text">Cart</div>
                <div className="cart">
                    <div className="item-count">{}</div>
                    <FaCartPlus className="cart icon"/>
                </div>
            </nav>
    )
}
