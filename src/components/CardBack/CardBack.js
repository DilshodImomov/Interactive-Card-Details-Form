import "./CardBack.css";

const CardBack = ({cardCvv}) => {
    return (
        <div className="cardBack">
            {/* <div className="cardContent"> */}
                <p className="cvv">{cardCvv}</p>
            {/* </div> */}
        </div>
    )
}

export default CardBack;