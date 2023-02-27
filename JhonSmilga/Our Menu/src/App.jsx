import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Catagories';
import Data from './Data';

const allCategories = ['All',...new Set(Data.map(item=>item.category))]



function App() {
  const [menu,setMenu] = useState(Data)
  const [Catagories, setCategories] = useState(allCategories)
  console.log(Catagories)

  function filterCategories(category){
    if(category === 'All'){
      setMenu(Data)
      return;
    }
     const filteredItem = Data.filter(item=> item.category===category)
      setMenu(filteredItem)
    }


  const showMenus= menu.map(item=>{
    return <Menu key = {item.id} {...item}/>
  })
  return (
    <main>
      <section className='menu section'>
        <div className='title'>Our showMenus</div>
        <Categories 
          items = {Catagories} 
          filterCategories = {filterCategories}
          />
        <div className='section-center'>
        {showMenus}
        </div>
      </section>
    </main>
  )
}

export default App;