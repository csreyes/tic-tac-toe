import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleSquare, switchPlayer, resetBoard, addWin, addTie } from '../actions/const'
import { shouldSwitchPlayer, updateScore } from '../helpers/util'
import SquareWrapper from '../components/SquareWrapper'
import RestartOverlay from '../components/RestartOverlay'
import Score from '../components/Score'

class Board extends Component {
  componentWillUpdate(nextProps) {
    updateScore(this.props, nextProps)
    shouldSwitchPlayer(this.props, nextProps);
  }

  render() {
      return (
        <div className="game-port">
          <SquareWrapper board={this.props.board} player={this.props.player} onSquareClick={this.props.onSquareClick} />
          <Score score={this.props.score} />
          <RestartOverlay gameState={this.props.gameState} onRestartOverlayClick={this.props.onRestartOverlayClick} />
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board,
    player: state.player,
    gameState: state.gameState,
    score: state.score
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSquareClick: (squareKey, player) => {
      dispatch(toggleSquare(squareKey, player))
    },
    switchPlayer: (player) => {
      dispatch(switchPlayer(player));
    },
    onRestartOverlayClick: () => {
      dispatch(resetBoard())
    },
    addWin: (player) => {
      dispatch(addWin(player))
    },
    addTie: () => {
      dispatch(addTie())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)