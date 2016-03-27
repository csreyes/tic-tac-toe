import { computeGameState } from '../helpers/gameStateUtil'

const gameState = (state = null, action) => {
  const board = state.board;
  const gameState = computeGameState(board);

  const computedState = Object.assign({}, state, {gameState})

  switch (action.type) {
    default:
      return computedState
  }
}

export default gameState