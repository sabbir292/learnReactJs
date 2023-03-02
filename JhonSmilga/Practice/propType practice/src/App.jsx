import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Data from './Data'
import Card from './Card'
function App() {
  const [data, setData] = useState(Data)

const showCard =  data.map(item=>{
    return <Card key = {item.id} {...item}/>
  })

console.log(data)
  return (
    <main className='main-container'>
        {showCard}
    </main>
  )
}

export default App
