export const toggleSquare = (squareKey, player) => {
  return {
    type: 'TOGGLE_SQUARE',
    squareKey,
    player
  }
}

export const switchPlayer = (player) => {
  return {
    type: 'SWITCH_PLAYER',
    player
  }
}
