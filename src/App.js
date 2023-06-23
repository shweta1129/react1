import "./App.css";
// import About from "./component/About";
import Navbar from "./component/Navbar";
import React, { useState } from "react";

import TextFrom from "./component/TextFrom";
import Alert from "./component/Alert";

function App() {
  // useState for dark mode enablement
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled","success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled","success");
    }
  };

  // useState for setting Alert
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode} title="PropTest" />
      <Alert showAlert={showAlert} alert={alert} />
      <TextFrom mode={mode} heading="Prop TextArea"  showAlert={showAlert}></TextFrom>
      {/* <About/> */}
    </div>
  );
}

export default App;
