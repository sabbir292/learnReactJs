import React from 'react';

const Categories = (props) => {
    const{items,filterCategories}= props
  return(
    <div className='btn-container'>
      {items.map((item,index)=> {
        return <button 
        key={index}
        className='filter-btn'
        onClick={()=>filterCategories(item)}
        >{item}</button>
      })}
    </div>
  )
};

export default Categories;