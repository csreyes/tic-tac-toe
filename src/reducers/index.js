import { combineReducers } from 'redux';
import board from './board'
import player from './player'
import gameState from './gameState'
/* Populated by react-webpack-redux:reducer */

const reduceReducers = (...reducers) => {
  return (previous, current) =>
    reducers.reduce(
      (p, r) => r(p, current),
      previous
    );
}

const reducers = combineReducers({
  board,
  player,
  gameState: (state = {}) => state 
});

module.exports = reduceReducers(reducers, gameState)
