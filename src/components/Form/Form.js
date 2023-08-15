import "./Form.css";

const Form = () => {
    return (
        <div className="cover">
            <div className="formBox">
                <label htmlFor="name">CARDHOLDER NAME</label>
                <input type="text" />
                <label htmlFor="name">CARD NUMBER</label>
                <input type="text" />
                <div className="dateCvv">
                    <div className="date">
                        <label htmlFor="date">EXP. DATE (MM/YY)</label>
                        <div className="inputs">
                            <input type="text" />
                            <input type="text" />
                        </div>
                    </div>
                    <div className="cvv">
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;