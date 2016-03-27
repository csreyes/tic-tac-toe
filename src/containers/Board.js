import React from 'react'
import { connect } from 'react-redux'
import Squares from '../components/Squares'

let Board = () => {
  return <div className="board">
    <h1>Board</h1>
    <Squares />
    <Squares />
    <Squares />
    <Squares />
  </div>
}
Board = connect()(Board)

export default Board