export const shouldSwitchPlayer = (currentProps, nextProps) => {
  const currentBoard = currentProps.board;
  const nextBoard = nextProps.board;
  const boardHasChanged = JSON.stringify(currentBoard) !== JSON.stringify(nextBoard)

  // switch player when the board has changed and there is no tie or winner,
  // however, keep player if previous game state was winner
  if (boardHasChanged && nextProps.gameState === 'IN_PROGRESS' && currentProps.gameState !== 'WINNER') {
    currentProps.switchPlayer(currentProps.player);
  }
}

export const updateScore = (currentProps, nextProps) => {
  const currentGameState = currentProps.gameState
  const nextGameState = nextProps.gameState;
  const player = currentProps.player;

  if (currentGameState !== nextGameState && nextGameState !== 'IN_PROGRESS') {
    if (nextGameState === 'WINNER') {
      currentProps.addWin(player);
    } else if (nextGameState === 'TIE') {
      currentProps.addTie();
    }
  }
}
