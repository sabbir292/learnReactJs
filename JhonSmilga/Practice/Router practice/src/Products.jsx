import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from './Data'
console.log(Data)
const Products = () => {
    const {productId} = useParams()
    const product = Data.find(item=> item.id ===productId)
    const {name,image} = product
  return (
    <div>
      <img src={image}/>
      <h3>{name}</h3>
      <Link to='/about'>Back to About</Link>
    </div>
  )
}

export default Products
