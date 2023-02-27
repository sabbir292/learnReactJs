import React from 'react';
import Tour from './Tour';
const Tours = ({data,handleClick}) => {


 const showTour = data.map(obj=>{
    return <Tour key = {obj.id} {...obj} handleClick = {handleClick}/>
 })   
  return <article>
            <div className='title'>
                <h2>Our Tours</h2>
                <p className='underline'></p>
            </div>
           {showTour}
         </article>
};

export default Tours;