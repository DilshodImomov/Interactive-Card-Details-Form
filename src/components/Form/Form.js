import "./Form.css";

const Form = ({changeName, changeNumber, changeMonth, changeYear, changeCvv}) => {

    return (
        <div className="cover">
            <div className="formBox">
                <label htmlFor="name">CARDHOLDER NAME</label>
                <div className="border">
                    <input type="text" placeholder="e.g. Jane Applesseed" maxLength={25} onChange={ changeName } />
                </div>
                <label htmlFor="name">CARD NUMBER</label>
                <div className="border">
                    <input type="text" maxLength={16} placeholder="e.g. 0000 0000 0000 0000" onChange={ changeNumber }/>
                </div>
                <div className="dateCvv">
                    <div className="date">
                        <label htmlFor="date">EXP. DATE (MM/YY)</label>
                        <div className="inputs">
                            <div className="border">
                                <input type="text" maxLength={2} placeholder="MM" onChange={ changeMonth } />
                            </div>
                            <div className="border">
                                <input type="text" maxLength={2} placeholder="YY" onChange={ changeYear } />
                            </div>
                        </div>
                    </div>
                    <div className="cvv">
                        <label htmlFor="cvv">CVV</label>
                        <div className="border">
                            <input type="text" maxLength={3} placeholder="e.g. 123" onChange={ changeCvv } />
                        </div>
                    </div>
                </div>
                <p className="btn">Confirm</p>
            </div>
        </div>
    )
}

export default Form;