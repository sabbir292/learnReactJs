import './index.css'
export default function Dies(props){
    const styles = {backgroundColor : props.isHeld? '#59E391': 'white'}

    return(
            <h2 
                className="dies"
                key={props.id}
                style = {styles}
                onClick = {props.onClick}
            
            >{props.value}</h2>
       
    )
}