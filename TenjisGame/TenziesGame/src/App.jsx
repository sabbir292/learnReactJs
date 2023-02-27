import './index.css'
import Dice from './Dice'
import React from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti' //celebration after completing the game

export default function App() {

    const [numbers, setNumbers] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [turns, setTurns] = React.useState({
        numberOfTurns: 0,
        totalTurns: 0,
        previousBest: 0,
        round: 1,
        totalRound: 1
    })
    localStorage.setItem('turns', turns.numberOfTurns)
    localStorage.setItem('round', turns.round)
    function createNewDice() {
        return {
            value: (Math.ceil(Math.random() * 6)), isHeld: false,
            id: nanoid(), key: nanoid()
        }
    }

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(createNewDice())
        }
        return newDice
    }


    const diceElements = numbers.map(number =>
        <Dice
            value={number.value}
            key={number.id}
            id={number.id}
            isHeld={number.isHeld}
            holdDice={() => holdDice(number.id)}

        />)


    function rollDice() {
        if (tenzies) {
            setNumbers(allNewDice())

        } else {
            setNumbers(oldNumbers => oldNumbers.map(number => {
                return number.isHeld ? number : createNewDice()
            }))
            
            setTurns(prev=>({
                ...prev,
                numberOfTurns: prev.numberOfTurns + 1,
            }))
        }
        if(tenzies){
            setTurns(prev => ({
                ...prev,
                round:  prev.round +1,
                numberOfTurns: 0
            }))
            if(parseInt(localStorage.getItem('round'))===1){
                localStorage.setItem('bestTurn',turns.numberOfTurns)
            }else{
                if(parseInt(localStorage.getItem('turns')) <= parseInt(localStorage.getItem('bestTurn'))){
                    localStorage.setItem('bestTurn', turns.numberOfTurns)
                }
            }
        }
        }
    
    function holdDice(id) {

        setNumbers(prevNumber => prevNumber.map(num => {
            return num.id === id ? { ...num, isHeld: !num.isHeld } :
                num
        }))
    }

    function clearData(){
        localStorage.clear()
    }

    React.useEffect(() => {
        const allHeld = numbers.every(number => number.isHeld)
        const firstNumber = numbers[0].value
        const allSameNumbers = numbers.every(number => number.value === firstNumber)
        if (allSameNumbers && allHeld) {
            setTenzies(true)

        } else {
            setTenzies(false)
        }

    }, [numbers])

    console.log(tenzies)
    console.log(turns)

    return (
        <main className='main-container'>
            <section className='hero'>
                {tenzies && <Confetti />}
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className='dice-container'>
                    {diceElements}
                </div>
                <div className='scores-container'>
                    <div className='turns rollBtn'>Turns: {turns.numberOfTurns}</div>
                    <button
                        className='rollBtn'
                        onClick={rollDice}>{tenzies ? 'New Game' : 'Roll'}
                    </button>
                    <div className='prevBest rollBtn'>Best: {parseInt(localStorage.getItem('bestTurn'))>0? parseInt(localStorage.getItem('bestTurn')): 0}</div>
                </div>
                <div onClick={clearData} className='clearAll rollBtn'>Clear All Records</div>
            </section>

        </main>
    )
}