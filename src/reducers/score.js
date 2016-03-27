const score = (state = createInitialScoreState(), action) => {
  let newState;
  switch (action.type) {
    case 'ADD_WIN':
      const player = action.player;
      newState = {};
      newState[player] = state[player] + 1;
      return Object.assign({}, state, newState);
    case 'ADD_TIE':
      newState = {
        ties: state['ties'] + 1
      };
      return Object.assign({}, state, newState);
    default:
      return state
  }
}

const createInitialScoreState = () => {
  return {
    player1: 0,
    player2: 0,
    ties: 0
  };
}

export default score