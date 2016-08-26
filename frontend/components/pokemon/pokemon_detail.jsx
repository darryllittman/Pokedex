import React from 'react';

const PokemonDetail = ({ pokemon }) => {
  if (!pokemon) {
    return <h2>loading</h2>;
  }

  return (
    <section className="pokemon-detail">
      <ul>
        <img src={pokemon.image_url} alt=""/>
        <li><h2>{pokemon.name}</h2></li>
        <li>Type: {pokemon.poke_type}</li>
        <li>Attack: {pokemon.attack}</li>
        <li>Defense: {pokemon.defense}</li>
        <li>Moves: &#34;{pokemon.moves}&#34;</li>
        <section className="toys">
          <h3>Toys</h3>
          <ul className="toy-list">
          </ul>
        </section>
      </ul>
    </section>
  );
};

export default PokemonDetail;
