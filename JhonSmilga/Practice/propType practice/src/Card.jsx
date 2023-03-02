import PropTypes from 'prop-types'
import defultImage from './assets/react.svg'
const Card = ({name,id,price,image})=>{
    const url = image && image.url
    return(
    <section className="card-container">
        <div className="img-container">
            <img 
                src={url || defultImage}
                className="img"

                />
        </div>
        <h3 className="name">{name}</h3>
        <h3 className="price">{price || 3.99}</h3>

            
    </section>
    )
}
Card.Prototypes={
    name:PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired
}
// Card.defaultProps = {
//     name:'default name',
//     price:'3.99',
//     image: defultImage

// }
export default Card