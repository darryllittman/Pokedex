import { POKEMON_CONSTANTS, POKEMON_ACTIONS } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const allPokemon = (state) => {
  let keys = Object.keys(state);
  let poke = [];
  keys.forEach ((p) => {
    poke.push(state[p]);
  });

  return poke;
};

const PokemonReducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case POKEMON_CONSTANTS.RECEIVE_ALL_POKEMON:
      newState = {};
      action.pokemon.forEach ((p)=> {
        newState[p.id] = p;
      });

      return newState;

    case POKEMON_CONSTANTS.RECEIVE_SINGLE_POKEMON:
      newState = merge({}, state);
      newState[action.pokemon.id] = action.pokemon;

      return newState;
    default:
      return state;
  }
};

// const allToys = (pokemon) => {
//
// }

export { PokemonReducer, allPokemon };
