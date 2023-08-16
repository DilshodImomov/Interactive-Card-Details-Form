import { useRef, useState } from "react";

import "./Form.css";

const Form = ({changeName, changeNumber, changeMonth, changeYear, changeCvv, setComponent}) => {
    const [nameError, setNameError] = useState("");
    const [cardNumberError, setCardNumberError] = useState("");
    const [dateError, setDateError] = useState("");
    const [cvvError, setCvvError] = useState("");
    const cardName = useRef();
    const cardNumber = useRef();
    const cardMonth = useRef();
    const cardYear = useRef();
    const cardCvv = useRef();
    let error = 0;
    let countErrors = 0;

    const validate = ( element, setError, onlyNumber, exactLength ) => {
        let value = element.current.value;
        if ( value.length === 0 ) {
            element.current.classList.add("wrong");
            setError("Can't be blank!");
            countErrors += 1;
            return;
        }
        if ( onlyNumber === false ) {
            for ( let i = 0; i < value.length; i++ ) {
                if ( !((value[i] >= 'a' && value[i] <= 'z') || (value[i] >= 'A' && value[i] <= 'Z') || value[i] === ' ') ) {
                    console.log(value[i])
                    element.current.classList.add("wrong");
                    setError("Wrong format, letters only!");
                    countErrors += 1;
                    return;
                }
            }
        }
        else {
            for ( let i = 0; i < value.length; i++ ) {
                if ( !(value[i] >= '0' && value[i] <= '9') ) {
                    element.current.classList.add("wrong");
                    setError("Wrong format, numbers only!");
                    countErrors += 1;
                    return;
                }
            }
        }
        if ( exactLength !== -1 && value.length !== exactLength ) {
            element.current.classList.add("wrong");
            setError("Wrong format, must be " + exactLength + " digits long!");
            countErrors += 1;
            return;
        }
        error = 1;
        element.current.classList.remove("wrong");
        setError("");
    }

    const submit = () => {
        countErrors = 0;
        validate(cardName, setNameError, false, -1);
        validate(cardNumber, setCardNumberError, true, 16);
        error = 0;
        validate(cardMonth, setDateError, true, 2);
        if ( error === 1 ) {
            validate(cardYear, setDateError, true, 2);
        }
        validate(cardCvv, setCvvError, true, 3);
        if ( countErrors === 0 ) {
            setComponent(1);
        }
    }

    return (
        <div className="cover">
            <div className="formBox">
                <label htmlFor="name">CARDHOLDER NAME</label>
                <div className="border">
                    <input type="text" placeholder="e.g. Jane Applesseed" ref={cardName} maxLength={25} onChange={ changeName } />
                </div>
                <p className="error">{nameError}</p>
                <label htmlFor="name">CARD NUMBER</label>
                <div className="border">
                    <input type="text" maxLength={16} placeholder="e.g. 0000 0000 0000 0000" ref={cardNumber} onChange={ changeNumber } />
                </div>
                <p className="error">{cardNumberError}</p>
                <div className="dateCvv">
                    <div className="date">
                        <label htmlFor="date">EXP. DATE (MM/YY)</label>
                        <div className="inputs">
                            <div className="border">
                                <input type="text" maxLength={2} placeholder="MM" ref={cardMonth} onChange={ changeMonth } />
                            </div>

                            <div className="border">
                                <input type="text" maxLength={2} placeholder="YY" ref={cardYear} onChange={ changeYear } />
                            </div>
                        </div>
                        <p className="error">{dateError}</p>
                    </div>
                    <div className="cvv">
                        <label htmlFor="cvv">CVV</label>
                        <div className="border">
                            <input type="text" maxLength={3} ref={cardCvv} placeholder="e.g. 123" onChange={ changeCvv } />
                        </div>
                        <p className="error">{cvvError}</p>
                    </div>
                </div>
                <p className="btn" onClick={submit}>Confirm</p>
            </div>
        </div>
    )
}

export default Form;