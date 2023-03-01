const reducer = (state,action)=>{

    if(action.type ==='SET_LOADING'){
        return{
            ...state,
            isLoading:true
        }
    }

    if(action.type ==='DISPLAY_ITEMS'){
        return{
            ...state,
            cart: action.payload,
            isLoading: false,
            
        }
    }

    if(action.type==='SELECT_AMOUNT'){

        const newCart = state.cart.map(item=>{
                if(item.id === action.payload.id){
                    if(action.payload.type ==='increase'){
                        return{
                            ...item,
                            amount: item.amount+1
                        }
                    }
                    if(action.payload.type ==="decrease"){
                        return{
                            ...item,
                            amount: item.amount-1
                        }
                    }
                }
                else{
                    return item
                }
            }).filter(item=> item.amount !==0)

        return{
            ...state,
            cart: newCart
        }
    }

   if(action.type ==='CLEAR_CART'){
    return{
        ...state, cart:[]
    }
   }
   if(action.type === 'REMOVE_ITEM'){
    return{
        ...state, 
        cart: state.cart.filter(item=> item.id !== action.payload)
    }
   }
//    if(action.type==='INCREASE_AMOUNT'){
//     const tempCart = state.cart.map(item=>{
//         if(item.id === action.payload){
//             return {...item, amount: item.amount + 1}
//         }else{
//             return item
//         }
//     })
//     return{
//         ...state,
//         cart: tempCart,
//     }
//    }
//    if(action.type==='DECREASE_AMOUNT'){
//     const tempCart = state.cart.map(item=>{
//         if(item.id === action.payload){
//             return {...item, amount: item.amount -1}
//         }else{
//             return item
//         }
//     }).filter(item=> item.amount !==0)
//     return{
//         ...state,
//         cart: tempCart,
//     }
//    }

   if(action.type === 'COUNT_TOTAL'){
    let {totalItems, totalPrice} = state.cart.reduce((total, currentItem)=>{

        const {price, amount} = currentItem
        total.totalItems += amount
        total.totalPrice += price*amount
        return total
    },
    {
        totalItems:0,
        totalPrice:0,
    })
    totalPrice = parseFloat(totalPrice.toFixed(2))
    return {...state, amount: totalItems, total: totalPrice}
   }


}
export default reducer