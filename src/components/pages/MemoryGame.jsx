import React from "react";
import gameCards from "../../utils/gameCards.json";
import Card from "./Card";

function MemoryGame() {
  return (
    <div className="row">
    <h1>Memory Gipgy Game</h1>
    <div>
        {gameCards.map(card => (
            <Card
            key={card.key}
            image={card.image}
            />
        ))}      
    </div>
    </div>
  );
}

export default MemoryGame;