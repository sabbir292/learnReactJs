import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tour from './Tour'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN


function App() {
  const url = 'https://course-api.com/react-tours-project'
  const [data,setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)




  const getData = async ()=>{
    setIsLoading(true)
    try {
       const response = await fetch(url)
       const data = await response.json()
      setIsLoading(false)
      setData(data)
     } catch (error) {
      setIsLoading(false)
      console.log(error)
     }
  }

  function handleClick(id){
    const newData = data.filter((data)=> data.id !==id)
    setData(newData)
}

useEffect(()=>{
  getData()
},[])


  if(isLoading){
    return(
      <main>
        <Loading />
      </main>
    )
  } 

  if(data.length ===0){
    return <main>
            <div className='title'>
             <h2>No tours left</h2>
            <p className='underline'></p>
            <button className='btn' onClick={()=>getData()}>Refresh</button>  
            </div>
          </main>
  }
  return <main>
            <Tours 
              data = {data}
              handleClick= {handleClick}
              />
         </main>
}

export default App