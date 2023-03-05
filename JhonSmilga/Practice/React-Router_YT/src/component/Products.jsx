import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom'


const Products = () => {

  return (
    <div>
    <h1>This is product page</h1>
    {Data.map(item=>{
      return <div>
      <Link to={`/products/${item.id}`}>{item.name}</Link>
      </div>
    })}
    </div>
  )
}

export default Products
