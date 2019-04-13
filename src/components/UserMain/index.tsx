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
      {playerList.map((player: any, index) => {
        return <h3 key={`player-${index}`}>{player.Name}</h3>;
      })}
    </>
  );
};

export default UserMain;
