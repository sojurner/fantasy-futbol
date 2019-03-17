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

export const registerUser = (userFields: RegisterProps) => ({
  type: 'REGISTER_USER',
  action: { ...userFields }
});

export const loginUser = (userFields: LoginProps) => ({
  type: 'LOGIN_USER',
  action: { ...userFields }
});
