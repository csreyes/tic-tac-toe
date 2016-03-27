import { connect } from 'react-redux'
import { toggleSquare, switchPlayer } from '../actions/const'
import SquareWrapper from '../components/SquareWrapper'

const mapStateToProps = (state) => {
  return {
    board: state.board,
    player: state.player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSquareClick: (squareKey, player) => {
      dispatch(toggleSquare(squareKey, player))
      dispatch(switchPlayer(player))
    }
  }
}

const Board = connect(
  mapStateToProps,
  mapDispatchToProps
)(SquareWrapper)

export default Board