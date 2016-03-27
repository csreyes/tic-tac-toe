require('styles/App.css');

import React from 'react';
import Header from '../containers/Header'
import Board from '../containers/Board'
import Scores from '../containers/Scores'

const App = () => (
  <div className="app">
    <Header />
    <Board />
    <Scores />
  </div>
)

export default App