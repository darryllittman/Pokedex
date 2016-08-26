import { POKEMON_ACTIONS } from '../actions/pokemon_actions';

export const fetchAllPokemon = (success) => {
  $.ajax({
    url: '/api/pokemon',
    method: 'GET',
    success
  });
};

export const gottaCatchOne = (id, success) => {
  $.ajax({
    url: `/api/pokemon/${id}`,
    method: 'GET',
    success
  });
};
