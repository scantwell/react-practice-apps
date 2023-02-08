import Troll from "../images/Troll Face.png";
import React from "react";

export default function Header() {
  return (
    <header className="App-header">
      <div className="brand">
        <img src={Troll} width="32" height="26"></img>
        <span>
          <h2 className="brand-name">Meme Generator</h2>
        </span>
      </div>
      <h3>React Course - Project 3</h3>
    </header>
  );
}
