import "./Cards.css";
import CardFront from "../CardFront/CardFront";
import CardBack from "../CardBack/CardBack";
import { forwardRef } from "react";

const Cards = forwardRef(({name, cardNumber, cardMonth, cardYear, cardCvv}) => {
    return (
        <div className="container">
            <div className="cards">
                <CardFront name={name} cardNumber={cardNumber} cardMonth={cardMonth} cardYear={cardYear} />
                <CardBack cardCvv={cardCvv} />
            </div>
        </div>
    )
});

export default Cards;