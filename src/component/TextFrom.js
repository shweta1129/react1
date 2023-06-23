import React, { useState } from "react";

export default function TextFrom(props) {
  const toUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to UpperCase","success")
  };
  const toLoCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed to LowerCase","success")
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared","success")
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handlechange = (e) => {
    console.log("value", e.target.value);
    setText(e.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handlechange}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={toUpCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={toLoCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={clearText}>
          Clear Text
        </button>
        <button
        //   type="submit"
          onClick={speak}
          className="btn btn-primary mx-1"
        >
          Speak
        </button>
      </div>
      <div className="container my-3">
        <h3>Word and Character count</h3>
        <p>
          {text.split(" ").length} Words {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
