import { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [cards, setCards] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(r => r.json())
      .then(pokeCards => setCards(pokeCards))
  }, [])


  function addNewCard(card) {
    setCards([...cards, card])
  }

  const filteredCards = cards.filter(card => card.name.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewCard={addNewCard} />
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection cards={filteredCards}/>
    </Container>
  );
}

export default PokemonPage;
