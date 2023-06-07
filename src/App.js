import React, { useState } from "react";
// import Button from "./components/Button";
import "./components/style.css"

function App() {
  const [count, setCound] = useState(0)
  if(count > 20){
    setCound (20)
  }else if(count < 0){
    setCound (0)
  }
  return (
    <>
      <body >
        <center>
          <h1 style={{
            fontSize: '100px',
            color: 'white'
          }}>{count}</h1>
          <button style={{
            background: 'indigo',
            padding: '20px 35px',
            borderRadius: '50px',
            border: '0',
            marginRight: '20px',
            color: 'white',
            fontSize: '25px',
            textTransform: 'uppercase',
            fontFamily: 'inherit',
            boxShadow: '2px 2px 30px -15px white',
            marginLeft: '30px',
        }} onClick={() => setCound(count + 1)}>incurument</button>
        <button style={{
            background: '#ffcc00',
            padding: '20px 35px',
            borderRadius: '50px',
            border: '0',
            marginRight: '20px',
            color: 'white',
            fontSize: '25px',
            textTransform: 'uppercase',
            fontFamily: 'inherit',
            boxShadow: '2px 2px 30px -15px white'
        }} onClick={() => setCound(count - 1)}>dencrement</button>
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
