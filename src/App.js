import "./App.css";
import Navbar from "./component/navbar";
import Textform from "./component/textform";
import About from "./component/about";
import { useState } from "react";
import Alerts from "./component/alerts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("dark mode ho gaya", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode ho gaya", "success");
    }
  };

  return (
    <div className="container ">
      {
        <BrowserRouter>
          <Navbar nav="textUtils" Mode={mode} Togglemode={toggle} />
          <Alerts alert={alert} />
          <div className="container my-3">
            <Routes>
              <Route path="about" element={<About />}></Route>
              <Route
                path="textform"
                element={
                  <Textform
                    showalert={showalert}
                    hell="Write text to analyze"
                    Mode={mode}
                  />
                }
              ></Route>
            </Routes>
          </div>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
