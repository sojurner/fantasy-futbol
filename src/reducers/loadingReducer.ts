export const loadingReducer = (
  state: boolean = true,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case 'IS_LOADING':
      return true;
    case 'HAS_LOADED':
      return false;
    default:
      return state;
  }
};
