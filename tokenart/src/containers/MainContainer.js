import React from "react";
import Card from "../components/Card/Card";

export default function MainContainer() {
  const displayArtwork = [];

  for (let i = 0; i < 25; i += 1) {
    displayArtwork.push(<Card />);
  }
  return (
    <div className="main">
      <h1 className="main__heading">Market</h1>
      <div className="main__market">{displayArtwork}</div>
    </div>
  );
}
