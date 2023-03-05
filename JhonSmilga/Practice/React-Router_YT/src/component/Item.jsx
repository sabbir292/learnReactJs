import React from 'react'
import { Link,useParams } from 'react-router-dom'
import Data from '../Data'


const Item = () => {
    const {productId} = useParams()

    const product = Data.find(item=> item.id === productId)
    const {image,name} = product
  return (
    <div>
      <img src={image}/>
      <h3>{name}</h3>
      <Link to='/products'>Back to products</Link>
    </div>
  )
}

export default Item
