import { Link } from "react-router-dom"
import Data from "./Data"
const About = ()=>{
    
    return(
        <>
        <h1>this is about page</h1>
        {Data.map(item=>{
            return ( <> <Link to={`/about/${item.id}`}>{item.name}</Link> <br/></>)
        })}

        </>
    )
}
export default About