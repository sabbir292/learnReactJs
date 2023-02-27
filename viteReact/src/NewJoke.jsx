import React from "react"
import Count from "./Count"
import JokeData from "./JokeData"
import Joke from "./Lists"
import Star from "./Star"

// export default function NewJoke(){
//     const showJoke = JokeData.map(joke=>{
//         return (<Joke setup = {joke.setup} punchline = {joke.punchline}/>)
//     })
//     return(
//         <div>
//             {showJoke}
//         </div>
//     )
// }

// state practice---------------

// const [isImportant, setIsImportant] = React.useState('Yes')
// console.log(isImportant)

// function handleClick(){
//     setIsImportant('no')
// }
// return(
//     <div>
//     <h1>
//         Is state important to know?
//     </h1>
//         <h1 onClick={handleClick}>{isImportant}</h1>
//     </div>
   
// )
// --------------------------------------------------------
    // ------counter-------------
// export default function NewJoke(){
//     const [initiaValue, modifiedVal]=React.useState(0)

//     function decrease(){
//         modifiedVal(preValue=> preValue-1)
//     }
//     function increase(){
//         modifiedVal(preValue => preValue+1)
//     }

//     return (
//         <div>
//             <button onClick={decrease}>-</button>
//                 <Count number ={initiaValue}/>
//             <button onClick={increase}>+</button>
//         </div>
//     )
// _________________________________________________

    // const isGoingOut = true

    // let answer
    // if(isGoingOut===true){
    //     answer='yes'
    // }else{
    //     answer="no"
    // }
//ternary:

//    let answer = isGoingOut? 'yes':"no"

// //use tarnary operator to ---------------

// const [isGoingOut, seIsgoingOut] =  React.useState(true)

// function handleClick(){
//     seIsgoingOut(prevState => !prevState)
// }

// return(
//     <h1 onClick={handleClick}>{isGoingOut? 'Yes': 'No'}</h1>
// )
// -------------------------------------------------------------

// const [thingArray,setThingsArray] = React.useState(['things 1', 'things 2'])

// }


// export default function NewJoke(){
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: false
//     })
    
//     /**
//      * Challenge: Move the star image into its own component
//      * - It should receive a prop called `isFilled` that it
//      *   uses to determine which icon it will display
//      * - Import and render that component, passing the value of
//      *   `isFavorite` to the new `isFilled` prop.
//      * - Don't worry about the abiliity to flip this value quite yet.
//      *   Instead, you can test if it's working by manually changing
//      *   `isFavorite` in state above.
//      */
    
//     // let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
//     // let isFilled = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
//     // function toggleFavorite() {
//     //     setContact(prevContact => ({
//     //         ...prevContact,
//     //         isFavorite: !prevContact.isFavorite
//     //     }))
//     // }
    
//     return (
//         <main>
//             <article className="card">
//                 <img src="./images/user.png" className="card--image" />
//                 <div className="card--info">
//                   <Star isFilled = {contact.isFavorite}/>
//                     <h2 className="card--name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="card--contact">{contact.phone}</p>
//                     <p className="card--contact">{contact.email}</p>
//                 </div>
                
//             </article>
//         </main>
//     )
// }


// Form practice in react.

export default function NewJoke() {
    const [formData,setFormData]=React.useState({
       
        firstName:'',
        lastName:'',
        email:'',
        comments:'',
        isChecked:true,
        employment:''
    })

    console.log(formData)

    function handleChange(event){
        // console.log(event.target.value)
        const {name, type, value,checked,employment} = event.target
        setFormData(prevFormData =>{
            return{
               ...prevFormData,
                [name]:type ==='checkbox'? checked : value
            }
        })
    }
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name = 'firstName'
                value = {formData.firstName}
            />
            <input
                type="text"
                placeholder="Second Name"
                onChange={handleChange}
                name='lastName'
                value = {formData.lastName}
            />
            <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name='email'
                value = {formData.email}
            />
            <textarea
                placeholder="Comments:"
                onChange={handleChange}
                name='comments'
                value = {formData.comments}
            />
            <input
                type='checkbox'
                checked ={formData.isChecked}
                onChange ={handleChange}
                name = 'isChecked'
                id = "checkbox"
            />
           <label
            htmlFor="checkbox">Are you Friendly?</label>
             
             <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    onChange={handleChange}
                    name ='employment'
                    value ='unemployed'
                    checked ={formData.employment === 'unemployed'}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    onChange={handleChange}
                    name ='employment'
                    value ='part-time'
                    checked ={formData.employment === 'part-time'}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    onChange={handleChange}
                    name ='employment'
                    value ='full-time'
                    checked ={formData.employment === 'full-time'}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
        </form>
    )
}
