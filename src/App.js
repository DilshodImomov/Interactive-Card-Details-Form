import './App.css';
import { useRef, useState } from 'react';
import Form from './components/Form/Form';
import Cards from "./components/Cards/Cards";

function App() {
  const [name, setName] = useState("Jane Applesseed");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardMonth, setCardMonth] = useState("00");
  const [cardYear, setCardYear] = useState("00");
  const [cardCvv, setCardCvv] = useState("000");

  const changeName = (event) => {
    let Name = event.target.value;
    if ( Name.length === 0 ) {
      Name = "Jane Applesseed";
    }
    setName(Name);
  }

  const changeNumber = (event) => {
    let number = event.target.value;
    if ( number.length === 0 ) {
      number = "0000 0000 0000 0000";
    }
    else {
      let newNumber = "";
      for ( let i = 0; i < number.length; i++ ) {
        if ( i !== 0 && i % 4 === 0 ) {
          newNumber += ' ';
        }
        newNumber += number[i];
      }
      number = newNumber;
    }
    setCardNumber(number);
  }

  const changeMonth = (event) => {
    let month = event.target.value;
    if ( month.length === 0 ) {
      month = "00";
    }
    setCardMonth(month);
  }

  const changeYear = (event) => {
    let year = event.target.value;
    if ( year.length === 0 ) {
      year = "00";
    }
    setCardYear(year);
  }

  const changeCvv = (event) => {
    let cvv = event.target.value;
    if ( cvv.length === 0 ) {
      cvv = "000";
    }
    setCardCvv(cvv);
  }

  return (
    <div className="background">
      <Cards name={name} cardNumber={cardNumber} cardMonth={cardMonth} cardYear={cardYear} cardCvv={cardCvv}  />
      <Form changeName={changeName} changeNumber={changeNumber} changeMonth={changeMonth} changeYear={changeYear} changeCvv={changeCvv} />
    </div>
  );
}

export default App;
