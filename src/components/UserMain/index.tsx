import React from 'react';
import { requestPlayers } from '../../utils/apiCalls';

const UserMain = () => {
  const [playerList, setPlayerList] = React.useState([]);

  React.useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = async () => {
    const players = await requestPlayers();
    setPlayerList(players);
  };

  return (
    <>
      <h1>Welcome</h1>
    </>
  );
};

export default UserMain;
