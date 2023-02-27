import React from 'react';
import Reviews from './Reviews';
import Data from './Data';
function App() {
  return (
    <main>
      <article  className='container'>
        <h1 className='title'>Our reviews</h1>
        <p className='underline'></p>
        <Reviews />
      </article>
    </main>
  )
}

export default App;