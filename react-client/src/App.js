import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  let form = {
    "name": name,
    "score": score,
  };

  const submit = () => {
    axios.post(`http://localhost:9000/forms`,  form ).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
          <h1>My Input Form</h1>
          <br />
          <p>Name</p>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <p>Score</p>
          <input
            type="text"
            onChange={(e) => setScore(e.target.value)}
            value={score}
          />
          <button style={{ margin: 30 }} onClick={() => {submit()}}>
            Submit
          </button>
      </header>
    </div>
  );
}

export default App;
