import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleSquare, switchPlayer, resetBoard } from '../actions/const'
import SquareWrapper from '../components/SquareWrapper'
import RestartOverlay from '../components/RestartOverlay'

class Board extends Component {
  componentWillUpdate(nextProps) {
    const currentBoard = this.props.board;
    const nextBoard = nextProps.board;
    const isBoardChange = JSON.stringify(currentBoard) !== JSON.stringify(nextBoard)

    // switch player when the board has changed and there is no tie or winner, 
    // however, keep player if previous game state was winner
    if (isBoardChange && nextProps.gameState === 'IN_PROGRESS' && this.props.gameState !== 'WINNER') {
      this.props.switchPlayer(this.props.player);
    }
  }

  render() {
      return (
        <div className="game-port">
          <SquareWrapper board={this.props.board} player={this.props.player} onSquareClick={this.props.onSquareClick} />
          <RestartOverlay gameState={this.props.gameState} onRestartOverlayClick={this.props.onRestartOverlayClick} />
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board,
    player: state.player,
    gameState: state.gameState
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)