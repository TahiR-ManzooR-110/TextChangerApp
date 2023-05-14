import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import TextArea from "./components/TextUtil/TextArea.js";
import Alert from "./components/Alert/Alert.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About.js";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(false);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  let enableDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          Logo="Tahir'sTextChanger"
          Home="Home"
          About="About"
          alert={alert}
          Mode={mode}
          enableDarkMode={enableDarkMode}
        />
        <div className="alertBox">
          <Alert alert={alert} />
        </div>
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <TextArea
                heading="Enter Your Text Below"
                Mode={mode}
                alert={alert}
                showAlert={showAlert}
              />
            </Route>
            <Route exact path="/About">
              <About Mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
