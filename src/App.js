import React, { useState, useEffect } from "react";
import "./App.css";

const URL = "https://api.adviceslip.com/advice";

function App() {
  const [advice, setAdvice] = useState();

  const getAdvice = (e) => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip.advice));
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="app">
      <div className="header">
        <h1>Life Advices</h1>
      </div>
      <div className="advice-container">
        <i>{advice}</i>
        <hr />
        <button onClick={getAdvice}>Another Advice</button>
      </div>
    </div>
  );
}

export default App;
