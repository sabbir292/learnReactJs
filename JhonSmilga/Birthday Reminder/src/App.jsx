import Lists from './Lists'
import Data from './Data'
import React from 'react'

export default function App(){

  const [data, setData] = React.useState(Data)

  const showList = data.map(person=>{
    return <Lists key = {person.ids} {...person}/>
  })
 function handleClick(){
  return setData([])
 }
  return(
    <main>
        <section className='container'>
        <h1 className='heading'>{data.length} birthdays today</h1>
        {showList}
        <button 
          className='clear btn'
          onClick={handleClick}
          >Clear All</button>
        </section>
    </main>
  )
}
