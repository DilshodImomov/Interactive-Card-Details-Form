import { forwardRef } from "react";
import "./CardFront.css";

const CardFront = forwardRef(({name, cardNumber, cardMonth, cardYear}) => {
    return (
        <div className="cardFront">
            <div className="cardContent">
                <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
                <div className="cardInfo">
                    <p className="cardNumber">{cardNumber}</p>
                    <div className="nameDate">
                        <p>{name}</p>
                        <p>{cardMonth}/{cardYear}</p>    
                    </div>    
                </div>            
            </div>
        </div>
    )
});

export default CardFront;