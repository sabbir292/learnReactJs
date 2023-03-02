export default function reducer(state,action){

  if(action.type === 'LOADING'){
    return{
      ...state,
      isLoading: true
    }
  }
  if(action.type === 'DISPLAYITEMS'){
    return{
      ...state,
      cart: action.payload,
      isLoading: false
    }
  }

  if(action.type === 'CLEAR_CART'){
    return{
      ...state,
      cart:[],
    }
  }
  if(action.type ==='SELECT_QUANTITY'){
    const newArr = state.cart.map(item=>{
      if(item.id === action.payload.id){
        if(action.payload.type ==='increase'){
          return{
            ...item, quantity: item.quantity +1
          }
        }
        else if(action.payload.type = 'decrease'){
          return{
            ...item, quantity: item.quantity -1
          }
        }
      }
      else{
        return item
      }
    }).filter(item=>item.quantity !==0)
    return{
      ...state,
      cart: newArr
    }
  }


  if(action.type==='REMOVE_ITEM'){
    const newCart = state.cart.filter(item=> item.id !== action.payload)
    return{
      ...state,
      cart: newCart,
    }
  }
  if(action.type ==='COUNT_TOTAL'){
    let {totalQuantity,totalPrice} = state.cart.reduce((total, cartItem)=>{
      const {quantity,price} = cartItem
      total.totalQuantity += quantity
      total.totalPrice += quantity*price 
      return total
    },{
      totalQuantity:0,
      totalPrice:0
    })
    totalPrice = parseFloat(totalPrice.toFixed(2))
    return{
      ...state,
      totalItem: totalQuantity,
      totalPrice: totalPrice
    }
  }

  throw new Error('No Matching Type')
}