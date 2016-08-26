import React from 'react';
import PokemonIndexItem from './pokemon_index_item';


const PokemonIndex = (props) => {
  const names = props.pokemon.map((p) => (
    <PokemonIndexItem pokemon={p} key={p.id} />
  ));
  return(
    <div className="pokedex">
      <ul>
        {names}
      </ul>
      {props.children}
    </div>
  );
};


export default PokemonIndex;
