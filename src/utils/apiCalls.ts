export const registerUser = async userFields => {
  const { name, username, password, email } = userFields;
  const userHash = {
    user_name: username,
    full_name: name,
    password,
    email
  };

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userHash)
  };

  try {
    const response = await fetch(
      'https://fantasy-futbol-api.herokuapp.com/',
      options
    );
    return await response.json();
  } catch (err) {
    return { err };
  }
};
