const board = (state = createInitialBoard(), action) => {
  switch (action.type) {
    case 'TOGGLE_SQUARE':
      return state
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

  return squareIdentifiers.map((identifier, index) => {
    return {
      class: identifier,
      key: index,
      value: null
    }
  });
}

export default board