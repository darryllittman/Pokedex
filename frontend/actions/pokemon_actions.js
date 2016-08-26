export const POKEMON_CONSTANTS = {
  RECEIVE_ALL_POKEMON: 'RECEIVE_ALL_POKEMON',
  REQUEST_ALL_POKEMON: 'REQUEST_ALL_POKEMON',
  REQUEST_SINGLE_POKEMON: 'REQUEST_SINGLE_POKEMON',
  RECEIVE_SINGLE_POKEMON: 'RECEIVE_SINGLE_POKEMON',
  CREATE_SINGLE_POKEMON: 'CREATE_SINGLE_POKEMON',
};

const receiveAllPokemon = (pokemon) => ({
  type: POKEMON_CONSTANTS.RECEIVE_ALL_POKEMON,
  pokemon
});

const requestAllPokemon = () => ({
  type: POKEMON_CONSTANTS.REQUEST_ALL_POKEMON
});

const requestSinglePokemon = (id) => {
  return ({
    type: POKEMON_CONSTANTS.REQUEST_SINGLE_POKEMON,
    id
  });
};

const receiveSinglePokemon = (pokemon) => ({
  type: POKEMON_CONSTANTS.RECEIVE_SINGLE_POKEMON,
  pokemon
});

const createSinglePokemon = () => ({
  type: POKEMON_CONSTANTS.CREATE_SINGLE_POKEMON
});

export const POKEMON_ACTIONS = {
  receiveAllPokemon,
  requestAllPokemon,
  requestSinglePokemon,
  receiveSinglePokemon,
  createSinglePokemon
};
