import CartItem from './CartItem'
import { useGlobalContext } from './Context'
function Cart(){
    const {cart,totalPrice}= useGlobalContext()
    return(
        <section className="cart-container">
            <CartItem />
            <p className='underline'></p>
          {cart.length>0?
           <div className='calculation-container'>
                <h3 className='total'>Total</h3>
                <h3 className='total-price'>${totalPrice}</h3>
            </div>
            :
            <div className='empty-cart'>
                <h3>Your cart is empty</h3>
            </div>
            }
        </section>
    )
}
export default Cart