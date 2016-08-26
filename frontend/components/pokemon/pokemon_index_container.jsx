import { connect } from 'react-redux';
import { POKEMON_ACTIONS } from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';
import { allPokemon } from '../../reducers/pokemon_reducer';

const mapStateToProps = (state, ownProps) => {
  return ({
    pokemon: allPokemon(state)
  });
};

export default connect(
  mapStateToProps
)(PokemonIndex);
