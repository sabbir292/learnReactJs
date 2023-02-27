
export default function Lists(props){
    console.log(props)
    const {name,age,image} = props
    return(
        <div>
            <div className="person">
             <img className="person img" src= {image}></img>
            </div>
            <h3 className="name">{name}</h3>
            <h6 className="age">{age} years</h6>
        </div>
    )
}