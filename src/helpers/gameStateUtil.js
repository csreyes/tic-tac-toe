export const computeGameState = (board) => {
  const winValues = [7, 56, 448, 73, 146, 292, 273, 84];
  const player1Score = computePlayerScore(board, 'player1');
  const player2Score = computePlayerScore(board, 'player2');
  const movesLeft =  computeMovesLeft(board);
  const winnerFound = win(winValues, player1Score) || win(winValues, player2Score);

  if (winnerFound) {
    return 'WINNER';
  } else if (movesLeft === 0) {
    return 'TIE';
  } else {
    return 'IN_PROGRESS'
  }
}

const computePlayerScore = (board, player) => {
  const playerSymbol = player === 'player1' ? 'x' : 'o';

  let playerScore = board.reduce((prev, curr) => {
      if (curr.value === playerSymbol) {
        return prev + curr.bitValue;
      } else {
        return prev;
      }
    }, 0);

  return playerScore;
}

const win = (winValues, score) => {
  var i;
  for (i = 0; i < winValues.length; i += 1) {
      if ((winValues[i] & score) === winValues[i]) {
          return true;
      }
  }
  return false;
}

const computeMovesLeft = (board) => {
  return board.filter((square) => {
    return square.value === null;
  }).length;
}