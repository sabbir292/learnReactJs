import React, { useState } from 'react';


const Tour = (props) => {
  const {id,image,info,name,price,handleClick} = props
  const [readMore, setReadMore] = useState(false)

  return <section className='single-tour'>
            <img className='img' src= {image} alt=''></img>
            <footer >
                <h4>{name}</h4>
                <p 
                  className='tour-info'>
                  {readMore? 
                  info 
                  : 
                  `${info.substring(0,200)}...`
                    
                  }
                  </p>
                  <button onClick={()=>setReadMore(!readMore)}>
                    {readMore? 'Show Less': 'Show More'}
                  </button>

                <button onClick={()=>handleClick(id)} className='delete-btn'>Not Interested</button>
                <h4 className='tour-price'>${price}</h4>
            </footer>

         </section>
};

export default Tour;