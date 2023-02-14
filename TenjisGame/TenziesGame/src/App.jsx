import './index.css'
import Dice from './Dice'
import React from 'react'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

export default function App(){

    const [numbers, setNumbers] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    function createNewDice(){
        return {
            value :(Math.ceil(Math.random()*6)), isHeld:false,
            id : nanoid(), key: nanoid()
        }
    }
    
    function allNewDice(){
        const newDice = []
        for (let i=0; i<10; i++){
            newDice.push(createNewDice())
        }
        return newDice
    }
   

    const diceElements = numbers.map(number=> 
    <Dice 
    value = {number.value} 
    key = {number.id}
    id = {number.id}
    isHeld = {number.isHeld}
    holdDice = {()=> holdDice(number.id)}

    />)
    
    
    function rollDice(){
        if(tenzies){
            setNumbers(allNewDice())
        }else{
            setNumbers(oldNumbers => oldNumbers.map(number =>{
              return number.isHeld? number : createNewDice()
            }))
        }
    }
    
  function holdDice(id){

    setNumbers(prevNumber => prevNumber.map(num => {
        return num.id ===id? {...num , isHeld: !num.isHeld}:
        num
    }))
  }
 
  React.useEffect(()=>{
    const allHeld = numbers.every(number => number.isHeld)
    const firstNumber = numbers[0].value
    const allSameNumbers = numbers.every(number => number.value === firstNumber)
    if(allSameNumbers && allHeld){
        setTenzies(true)
        
    }else{
        setTenzies(false)
    }

  }, [numbers])
  
    return(
        <main className='main-container'>
            <section className='hero'>
                {tenzies&& <Confetti/>}
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className='dice-container'>
                    {diceElements}
                </div>
                <button 
                    className='rollBtn' 
                    onClick={rollDice}>{tenzies? 'New Game': 'Roll'}
                </button>
            </section>
            
        </main>
    )
}