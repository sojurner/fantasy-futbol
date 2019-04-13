export const registerUser = async userFields => {
  const { fullName, username, password, email } = userFields;
  const userHash = {
    user_name: username,
    full_name: fullName,
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
      'https://fantasy-futbol-ds.herokuapp.com/api/v1/signup',
      options
    );
    return await response.json();
  } catch (err) {
    return { err };
  }
};

export const requestPlayers = async () => {
  try {
    const response = await fetch(
      'https://fantasy-futbol-ds.herokuapp.com/api/v1/player_stats'
    );
    return await response.json();
  } catch (error) {
    return { error };
  }
};
