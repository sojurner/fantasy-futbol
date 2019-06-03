export const playerReducer = (state = { players: {}, count: 0 }, action) => {
  switch (action.type) {
    case 'SET_PLAYERS':
      const players = { ...state.players, ...action.payload.players };
      return { players, count: action.payload.count };
    default:
      return state;
  }
};
