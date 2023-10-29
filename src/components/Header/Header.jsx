import React from "react";
import reactCoreConcept from "../../assets/react-core-concepts.png";
import "./Header.css";

export default function Header() {
  const reactDescription = ["Fundamental", "Crucial", "Core"];
  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  let descriptionValue = reactDescription[getRandomInt(2)];
  return (
    <header>
      <img src={reactCoreConcept} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptionValue} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}
