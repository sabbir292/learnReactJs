import React, { useState } from 'react';
import Data from './Data';
import Question from './Question';

function App() {
  const [questions, setQuestions] = useState(Data)


  const showQuestion = questions.map(question=>{
    return <Question key = {question.id} {...question}/>
  })

  return(
    <main>
      <div className='container'>
        <h3>Quesion And Answer About Login</h3>
          <section className='info'>
            {showQuestion}
          </section>
      </div>
    </main>
  )
}

export default App;