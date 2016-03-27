import { computeGameState } from '../helpers/gameStateUtil'

const gameState = (state = null, action) => {
  const board = state.board;
  const gameState = computeGameState(board);

  const computedState = Object.assign({}, state, {gameState})

  switch (action.type) {
    case 'RESTART_GAME':
      return computedState
    default:
      return computedState
  }
}

export default gameState