import React from "react";
import logosena from "./assets/logosena.png";
import "./Titulo.css";

export const Titulo = () => {
  return (
    <div className="Body">
      <div class="p">
        <h1>SENA</h1>
      </div>

      <div class="logo">
        <img src={logosena} alt="logosena"></img>
      </div>
    </div>
  );
};
