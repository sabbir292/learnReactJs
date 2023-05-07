import './index.css'
import Dies from './Dies'
import {nanoid} from "nanoid"
import React from 'react'
import ReactConfetti from 'react-confetti'

export default function App(){
    const [dice, setDice] = React.useState(AllnewDices())
    const [Tenzies, setTenzies] = React.useState(false)

    React.useEffect(()=>{
        const allHeld = dice.every(die=> die.isHeld)
        const firstNum = dice[0].value
        const allSameDice = dice.every(die => die.value === firstNum)
        if(allHeld && allSameDice){
            setTenzies(true)
        }else{
            setTenzies(false)
        }
    },[dice])


    function createNewDies(){
        const randomNum = Math.ceil(Math.random()*6)
        return {
            value : randomNum,
            id : nanoid(),
            isHeld: false,
        }
    }

    function AllnewDices(){
        const diceArr = []
        for(let i=0; i<10; i++){
            diceArr.push(createNewDies())
        }
        return diceArr
    }

    const showDies = dice.map(die =>{
        return <Dies 
                value = {die.value}
                id = {die.id}
                key = {die.id}
                isHeld = {die.isHeld}
                onClick = {()=> heldDice(die.id)}
                />
    })

    function rollDice(){
        if(Tenzies){
            setDice(AllnewDices()) 
        }else{
            setDice(oldDice=>oldDice.map(dice=>{
            return dice.isHeld? dice : createNewDies()
            }))
        }
    }

    function heldDice(id){
        setDice(oldDice => oldDice.map(dice=> {
            return id === dice.id? {...dice, isHeld: !dice.isHeld}: dice
        }))
    }

    console.log(Tenzies)
    return(
        <div className='main-container'>
            {Tenzies && <ReactConfetti/>}
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className='dies-container'>
                {showDies}
            </div>
            <button 
                className='rollBtn'
                onClick={rollDice}
                >{Tenzies? 'New Game': 'Roll'}</button>
        </div>
    )
    }