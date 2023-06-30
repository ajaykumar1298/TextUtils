import { useState } from "react";
import "./App.css";
import AboutUs from "./component/AboutUs";
import NavBar from "./component/NavBar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1700);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Enable Dark Mode", "success");
      // document.title = "TextUtils - Enable Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enable Light Mode", "success");
      // document.title = "TextUtils - Enable Light Mode";
    }
  };
  return (
    <>
      <Router>
        <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* <NavBar /> */}
        <Alert alert={alert} />

        {/* <AboutUs /> */}
        <Switch>
          <Route path="/about">
            <AboutUs mode={mode} />
          </Route>
          <Route path="/">
            <TextForm mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
