import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root_component';
import { POKEMON_CONSTANTS, POKEMON_ACTIONS } from './actions/pokemon_actions';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});
