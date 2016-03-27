import React, { Component } from 'react'
import { connect } from 'react-redux'
// import {  } from '../actions/const'

class Score extends Component {
  render() {
    const score = this.props.score
      return (
        <div className="container-fluid">
          <div className="score row">
            <div className="score-container col-md-4 col-xs-4 col-s-4">
              <div className="score-heading">Player 1 (X)</div>
              <div className="score-value">{score.player1}</div>
            </div>
            <div className="score-container col-md-4 col-xs-4 col-s-4">
              <div className="score-heading">Ties</div>
              <div className="score-value">{score.ties}</div>
            </div>
            <div className="score-container col-md-4 col-xs-4 col-s-4">
              <div className="score-heading">Player 2 (O)</div>
              <div className="score-value">{score.player2}</div>
            </div>
          </div>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.player,
    score: state.score,
    gameState: state.gameStates
  }
}

export default Score