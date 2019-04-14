interface RegisterProps {
  email: string;
  username: string;
  password: string;
  name: string;
}

interface LoginProps {
  email: string;
  password: string;
}

interface User {
  email: string;
  full_name: string;
  user_name: string;
}

export const registerUser = (userFields: RegisterProps) => ({
  type: 'REGISTER_USER',
  payload: { ...userFields }
});

export const loginUser = (userFields: LoginProps) => ({
  type: 'LOGIN_USER',
  payload: { ...userFields }
});

export const setUser = (user: User) => ({
  type: 'SET_USER',
  payload: { ...user }
});
