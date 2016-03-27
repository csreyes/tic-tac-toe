import { combineReducers } from 'redux';
import board from './board'
import player from './player'
/* Populated by react-webpack-redux:reducer */
const reducers = {board, player};
module.exports = combineReducers(reducers);
