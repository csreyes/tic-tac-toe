import { combineReducers } from 'redux';
import board from './board'
import player from './player'
import score from './score'
import gameState from './gameState'

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
  score,
  gameState: (state = {}) => state // added to combineReducers to avoid key warning
});

// Add reducers to reduceReducer to compute game state from current board state
module.exports = reduceReducers(reducers, gameState)
