export const sessionReducer = (
  state: {} = {},
  action: {
    type: string;
    name: string;
    email: string;
    username: string;
    password: string;
  }
) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return state;
    default:
      return state;
  }
};
