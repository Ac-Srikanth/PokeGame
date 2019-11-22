import React from "react";
import ReactDOM from "react-dom";
// import Pokecard from "./Pokecard"
// import Pokedex from "./Pokedex"
import Pokegame from "./Pokegame";

import "./styles.css";

function App() {
  return (
    <div className="App">
     <Pokegame />     
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
