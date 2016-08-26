import { fetchAllPokemon, gottaCatchOne } from '../util/api_util';
import { POKEMON_ACTIONS,
         POKEMON_CONSTANTS } from '../actions/pokemon_actions';

export default ({ dispatch }) => next => action => {
  let success;
  switch(action.type) {
    case POKEMON_CONSTANTS.REQUEST_ALL_POKEMON:
      success = (data) => {
        dispatch(POKEMON_ACTIONS.receiveAllPokemon(data));
      };
      fetchAllPokemon(success);
      break;

    case POKEMON_CONSTANTS.REQUEST_SINGLE_POKEMON:
      success = (data) => {
        dispatch(POKEMON_ACTIONS.receiveSinglePokemon(data));
      };
      gottaCatchOne(action.id, success);
      break;
    default:
      next(action);
  }
};
