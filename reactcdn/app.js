
// ReactDOM.render(<h1>hellow world</h1>, document.getElementById("container"))

// ReactDOM.render(
// <ul>
// <li>one</li>
// <li>two</li>
// <li>two</li>
// </ul>,
// document.getElementById("container")
// )

// ReactDOM.render(
//     <ul>
//         <li>One</li>
//         <li>Two</li>
//         <li>Three</li>
//         <li>four</li>
//     </ul>,document.getElementById("container")
// )

// ReactDOM.render(
//     <div>
//         <h1>Hi I am Sabbir Hossain</h1>
//         <h3>I have just started to learn the reactjs.</h3>
//         <h2>I will be a very successfull web developer in  three months. I am going to crack a job within 3 moths.that is my one and only goal at the moment. I hope I will be successfull, I am willing to put whatever effort it takes to do that. </h2>
//     </div>,document.getElementById("container")
// )
// ReactDOM.render(
//     <ul>
//         <li>One</li>
//         <li>One</li>
//         <li>One</li>
//         <li>One</li>
//     </ul>,document.getElementById("container")
// )


// function Navbar(){
//     return (
//         <nav>
//         <div className="logo">
//             <a href="">
//                 <h3>Logo</h3>
//             </a>
//         </div><ul>
//                 <li><a href="">Home</a></li>
//                 <li><a href="">About</a></li>
//                 <li><a href="">Contact</a></li>
//                 <li><a href="">Visit</a></li>
//             </ul>
//         </nav>
//     )
// }

// function MainContent(){
//     return(
//         <h1>I am learning React!</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Navbar/>
//         <MainContent/>
//     </div>,document.getElementById("container")
// )


// with vanila javascript

// const container = document.getElementById("container")


// const h1 = document.createElement("h1")
//  h1.textContent = "I am learning reactjs now"
//  h1.className = "header"

// container.appendChild(h1)

// with react

// ReactDOM.render(<h1>hellow world</h1>, document.getElementById("container"))

// document.getElementById("container").append(JSON.stringify(Navbar))

// const Navbar = ( 
//         <nav>
//             <h1>Logo</h1>
//             <ul>
//                 <li>Pricing</li>
//                 <li>about</li>
//                 <li>contact</li>
//             </ul>
//         </nav>
// )
// console.log(Navbar)
// ReactDOM.render(
//    Navbar,document.getElementById("container")
// )


// ********Challange One*******************//


// const Content = (
//     <div>
//     <div>
//     <img src="./React-icon.svg" width = "40px" alt=""/>
//     </div>
//     <h1>Fun facts about React</h1>
//     <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100k starts on Github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands fo enterprise apps, including mobile apps</li>
//     </ul>
//     </div>
// )

// ReactDOM.render(Content,document.getElementById("container"))

import Header from './Header'

function Content(){
    return(
        <div className='content'>
            <h1 className= "heading">Reason I'm exited to learn React</h1>
            <ol className= "lists">
                <li>I want to build modern looking web application</li>
                <li>Application that have very good user experience</li>
                 <li>I also want to get a job by learning react</li>
            </ol>
        </div>
    )

}

function Footer(){
    return(
        <footer className = "footer">"01-02-2023 @hossain development. All right reserved"</footer>
    )
}

function Content(){
    return(
    <div>
        <Header/>
        <H1/>
        <OrderList/>
        <Footer/>   
    </div> 
    )
}
ReactDOM.render(<Content/>,document.getElementById("container"))
