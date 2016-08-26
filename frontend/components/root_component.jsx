import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Router, Route, hashHistory } from 'react-router';
import { POKEMON_ACTIONS } from '../actions/pokemon_actions';
import PokemonDetailContainer
  from './pokemon/pokemon_detail_container';

const Root = ({ store }) => {
  const requestAllPokemon = () => {
    store.dispatch(POKEMON_ACTIONS.requestAllPokemon());
  };

  const requestSinglePokemon = (nextState) => {
    store.dispatch(
      POKEMON_ACTIONS.requestSinglePokemon(nextState.params.id));
  };

  const createSinglePokemon = (nextState) => {
    store.dispatch(
      POKEMON_ACTIONS.createSinglePokemon(nextState.params.id));
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/"
               component={PokemonIndexContainer}
               onEnter={requestAllPokemon}>
          <Route path="pokemon/:id"
                 component={PokemonDetailContainer}
                 onEnter={requestSinglePokemon}>
            <Route path="toys/:id"
                   component={ToyDetailContainer}
                   onEnter={createSinglePokemon}>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
