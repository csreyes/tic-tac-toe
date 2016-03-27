const player = (state = 'player1', action) => {
  switch (action.type) {
    case 'SWITCH_PLAYER':
      return state === 'player1' ? 'player2' : 'player1'
    default:
      return state
  }
}

export default player