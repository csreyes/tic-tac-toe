import { connect } from 'react-redux'
import { toggleSquare, switchPlayer, checkForWinner } from '../actions/const'
import SquareWrapper from '../components/SquareWrapper'

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
      dispatch(checkForWinner(player))
      dispatch(switchPlayer(player))
    }
  }
}

const Board = connect(
  mapStateToProps,
  mapDispatchToProps
)(SquareWrapper)

export default Board