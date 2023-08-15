import "./Form.css";

const Form = () => {
    return (
        <div className="cover">
            <div className="formBox">
                <label htmlFor="name">CARDHOLDER NAME</label>
                <div className="border">
                    <input type="text" placeholder="e.g. Jane Applesseed" />
                </div>
                <label htmlFor="name">CARD NUMBER</label>
                <div className="border">
                    <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
                </div>
                <div className="dateCvv">
                    <div className="date">
                        <label htmlFor="date">EXP. DATE (MM/YY)</label>
                        <div className="inputs">
                            <div className="border">
                                <input type="text" placeholder="MM" />
                            </div>
                            <div className="border">
                                <input type="text" placeholder="YY" />
                            </div>
                        </div>
                    </div>
                    <div className="cvv">
                        <label htmlFor="cvv">CVV</label>
                        <div className="border">
                            <input type="text" placeholder="e.g. 123" />
                        </div>
                    </div>
                </div>
                <p className="btn">Confirm</p>
            </div>
        </div>
    )
}

export default Form;