import React from 'react';
import { withRouter } from 'react-router';
import PokemonDetail from './pokemon_detail';

const PokemonIndexItem = ({ pokemon, router }) => (
  <li className="pokemon-index-item"
      onClick={_handleClick.bind(null, router, `/pokemon/${pokemon.id}`)}>
    <span>{pokemon.id}</span>
    <img src={pokemon.image_url} alt={pokemon.name}/>
    <span>{pokemon.name}</span>
  </li>
);

const _handleClick = (router, url) => {
  router.push(url);
};

export default withRouter(PokemonIndexItem);
