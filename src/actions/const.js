// Board-specific sctions
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

export const resetBoard = () => {
  return {
    type: 'RESET_BOARD'  
  }
}


// Score-specific actions
export const addWin = (player) => {
  return {
    type: 'ADD_WIN',
    player
  }
}

export const addTie = () => {
  return {
    type: 'ADD_TIE'
  }
}

