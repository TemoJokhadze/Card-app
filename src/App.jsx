import { useState } from "react";
import reactLogo from "./assets/image.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("JANE APPLESEED");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const [text2, setText2] = useState("0000000000000000 ");
  const handleChange2 = (event) => {
    setText2(event.target.value);
  };
  const [text3, setText3] = useState("00");
  const handleChange3 = (event) => {
    setText3(event.target.value);
  };
  const [text4, setText4] = useState("00");
  const handleChange4 = (event) => {
    setText4(event.target.value);
}
const [text5, setText5] = useState("000");
const handleChange5 = (event) => {
  setText5(event.target.value);
}
  return (
    <>
      <div className="main-cont">
        <div className="cont1">
          <div className="card1">
            <div className="circles">
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <h1 className="numbers">{text2}</h1>
            <div className="rectangle">
              <h3 className="name">{text}</h3>
              <h3 className="date">
                {text3}/{text4}
              </h3>
            </div>
          </div>
          <div className="card2">
            <div className="rect"></div>
            <div className="rect2">
              <h3 className="numbs">{text5}</h3>
            </div>
            <img src={reactLogo} alt="des" className="img" />
          </div>
        </div>
        <div className="cont2">
          <p className="title1">Cardholder Name</p>
          <input
            className="input1"
            type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={handleChange}
            // value={text}
          />
          <p className="title2">Card Number</p>
          <input
            className="input1"
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={handleChange2}
          />
          <div className="inputss">
            <div className="inputs">
              <p className="title3">Exp. Date (MM/YY)</p>
              <p className="title4">CVC</p>
            </div>
          </div>
          <div className="inpts">
            <input
              className="input3"
              type="text"
              placeholder="YY"
              onChange={handleChange3}
            />
            <input
              className="input2"
              type="text"
              placeholder="MM"
              onChange={handleChange4}
            />
            <input placeholder="e.g. 123" type="text" onChange={handleChange5} className="input4" />
          </div>
          <button>Confirm</button>
        </div>
      </div>
    </>
  );
}

export default App;
