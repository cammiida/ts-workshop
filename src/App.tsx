import React from "react";
import "./App.css";
import Person from "./Person";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person name="Mark" age={35} favoriteColor="blue"></Person>
        ---------------
        <Person name="Ada" age={207}></Person>
      </header>
    </div>
  );
}

export default App;
