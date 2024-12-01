
import {imageurl} from "../utilis/constants";

const Card =(props)=>{
    const rating =props.rating? (props.rating + "Ratings") : "New"
    return (
        <div>
            <a href={props.link} className="link">
        <div className="resto-card">
         <img src={imageurl+props.image} alt="logo" className="resto-logo"/>
         <div className="resto-name">
         <h4>{props.name}</h4>
         </div>
         <h5>{props.cuisine.join(",  ")}</h5>

         <h5>{rating}</h5>
         <h5> {props.costfortwo}</h5>
         <h5>{props.deliveryTime} Minutes</h5>
         <h5>Closes by {props.closeTime} </h5>
        </div>
        </a>
        </div>
    )
}

export default Card;