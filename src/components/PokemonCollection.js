import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({cards}) {
  const cardsToDisplay = cards.map(card => <PokemonCard name={card.name} hp={card.hp} frontImage={card.sprites.front} backImage={card.sprites.back}/>)
  return (
    <Card.Group itemsPerRow={6}>
      {cardsToDisplay}
    </Card.Group>
  );
}

export default PokemonCollection;
