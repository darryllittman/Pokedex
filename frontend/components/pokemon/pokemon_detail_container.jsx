import React from 'react';
import PokemonDetail from './pokemon_detail';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  
  return ({
    pokemon: state[ownProps.params.id]
  });
};

const Test = () => (
  <h1>got here</h1>
);

export default connect(
  mapStateToProps
)(PokemonDetail);
