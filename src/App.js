import React, { useState } from "react";
// import Button from "./components/Button";
import "./components/style.css"

function App() {
  const [count, setCound] = useState(0)
  if (count > 100) {
    setCound(100)
  }
  return (
    <>
      <body >
        <center>
          <div className="Div1"></div>
          <div className="Div2"></div>
          <div className="Div3">
            <div className="Div4"></div>
            <div className="Div4_2"></div>
          </div>
          <div className="Div5">
            <div className="Div6"></div>
            <div className="Div6_6"></div>
          </div>
          <div className="Div5_5">
            <div className="Div6"></div>
            <div className="Div6_6"></div>
          </div>
          <div className="oyna">
            <h1>{count}</h1>
          </div>
          <button className="btn2" onClick={() => setCound(0)}>Restart</button>
          <div><button className="btn1" onClick={() => setCound(count + 1)}>Incurument</button></div>

        </center>
      </body >
      {/* <center>
        <Button name={"Button1"} className={"red"} />
        <br></br>
        <br></br>
        <Button name={"Button2"} className={"rebeccapurple"} />
        <br></br>
        <br></br>
        <Button name={"Button3"} className={"teal"} />
        <br></br>
        <br></br>
        <Button name={"Button4"} className={"yellow"} />
        <br></br>
        <br></br>
        <Button name={"Button5"} className={"indigo"} />
        <br></br>
        <br></br>
        <Button name={"Button6"} className={"olive"} />
      </center> */}
    </>
  );
}

export default App; 
