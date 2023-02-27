import "./Lists.css"


// export default function Lists(){
//     return(
//         <div className='content'>
//             <h1 className= "heading">Reasons I'm exited to learn React</h1>
//             <ol className= "lists">
//                 <li>I want to build modern looking web application</li>
//                 <li>Application that have very good user experience</li>
//                  <li>I also want to get a job by learning react</li>
//             </ol>
//         </div>
//     )

// }

export default function Joke({setup,punchline}){
    return(
        <div>
        <h1>{setup}</h1>
        <h3>{punchline}</h3>
        </div>
    )
}


// const nums = [1,2,3,4,5]

// const newArr = nums.map(num =>{
//     // console.log(num)
//     let arr = num*num
//     return arr
   
// })
// console.log(newArr)

// const names =['alice','bob','charle','danielle']

// const newNames = names.map(item=>{
//     let firstletter = item.slice(0,1)
//     let uppercase = firstletter.toUpperCase()
//     let rest = item.slice(1,item.length)
//     return uppercase + rest
// })
// console.log(newNames)

// const html = names.map(name=>`<p>${name}</p>`)
// console.log(html)