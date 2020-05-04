import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading, setError } from '../../store/actions/gameActions';
import { getGamePlayer, getGameMonster } from '../../store/utils/services';
import LoginScreen from '../../Screens/LoginScreen/loginScreen';
import GameScreen from '../../Screens/GameScreen/GameScreen';

export default function Layout() {
  const dispatch = useDispatch();
  const gameDataId = useSelector((state) => state.gameData.id);
  const loading = useSelector((state) => state.loading);
  const [gameComponent, setGameComponent] = useState(false);

  const goGameScreen = () => {
    dispatch(setLoading(true));
    if (gameDataId) {
      dispatch(getGamePlayer(gameDataId));
      dispatch(getGameMonster(gameDataId));
      setGameComponent(true);
    } else {
      dispatch(setError('You need to enter your name!'));
    }
  };

  return <>{gameComponent ? <GameScreen /> : <LoginScreen goGameScreen={goGameScreen} />}</>;
}
