const board = (state = createInitialBoard(), action) => {
  switch (action.type) {
    case 'TOGGLE_SQUARE':
      const fillInValue = action.player === 'player1' ? 'x' : 'o';
      const newState = state.map((square) => {
        if (square.key === action.squareKey) {
          return Object.assign({}, square, {value: fillInValue})
        }
        return square;
      })
      return newState
    case 'RESET_BOARD':
      return createInitialBoard();
    default:
      return state
  }
}

const createInitialBoard = () => {
  const squareIdentifiers = [
  'square top left',
  'square top',
  'square top right',
  'square left',
  'square',
  'square right',
  'square bottom left',
  'square bottom',
  'square bottom right'
  ];

  var bitValue = 1;
  return squareIdentifiers.map((identifier, index) => {
    let squareProps = {
      class: identifier,
      key: index,
      value: null,
      bitValue
    }

    bitValue *= 2;
    return squareProps;
  });
}

export default board