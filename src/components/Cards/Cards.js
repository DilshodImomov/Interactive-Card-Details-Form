import "./Cards.css";
import CardFront from "../CardFront/CardFront";
import CardBack from "../CardBack/CardBack";

const Cards = () => {
    return (
        <div className="container">
            <div className="cards">
                <CardFront className="card-front" />
                <CardBack />
            </div>
        </div>
    )
}

export default Cards;