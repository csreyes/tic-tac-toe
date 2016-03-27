require('styles/App.css');

import React from 'react';
import Header from '../containers/Header'
import Board from '../containers/Board'

const App = () => (
  <div className="app">
    <Header />
    <Board />
  </div>
)

export default App