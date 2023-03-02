import { FaCartPlus,FaMinusSquare,FaPlusSquare } from "react-icons/fa";
import { useGlobalContext } from './Context'

function CartItem(){
    const {cart,selectQuantity,removeItem} = useGlobalContext()
    return( cart.map(item=>{
        return <article key = {item.id} className="item-container">
                <div className="image-container">
                    <img className="img" src={item.image} />
                </div>

                <div className="description-container">
                    <h3 className="product-title">{item.title}</h3>
                    <h4 className="price">$ {item.price}</h4>
                    <h4 
                        onClick={()=>removeItem(item.id)}
                        className="remove-btn">Remove</h4>
                </div>

                <div className="quantity-container">
                    <FaMinusSquare 
                        onClick={()=>selectQuantity(item.id,'decrease')}
                        className="minus-btn Q-btn"/>
                    <p className="quantity">{item.quantity}</p>
                    <FaPlusSquare 
                        onClick={()=>selectQuantity(item.id,'increase')}
                        className="plus-btn Q-btn" />
                </div>

            </article>
    })
            
 
    )
}
export default CartItem