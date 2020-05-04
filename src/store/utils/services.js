import axios from 'axios';
import {
  setLoading,
  gameData,
  setError,
  setPlayer,
  setMonster,
  setMonsterShield,
  setPlayerShield,
  setPlayerHp,
  setMonsterHp,
  addPowerCards,
} from '../actions/gameActions';

const startGame = (params) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const url = 'http://game.bons.me/api/games';
    try {
      const response = await axios.post(url, params);
      dispatch(gameData(response.data));
    } catch (e) {
      dispatch(setError(e));
      throw Error(e);
    }
  };
};

const getGamePlayer = (id) => {
  console.log('id on game player', id);
  return async (dispatch) => {
    dispatch(setLoading(true));
    const url = `http://game.bons.me/api/games/${id}/player`;
    try {
      const response = await axios.get(url);
      dispatch(setPlayer(response.data));
      dispatch(setPlayerShield(response.data.shield));
      dispatch(setPlayerHp(response.data.hp));
    } catch (e) {
      dispatch(setError(e));
      throw Error(e);
    }
  };
};

const getGameMonster = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const url = `http://game.bons.me/api/games/${id}/monster`;
    try {
      const response = await axios.get(url);
      dispatch(setMonster(response.data));
      dispatch(setMonsterShield(response.data.shield));
      dispatch(setMonsterHp(response.data.hp));
    } catch (e) {
      dispatch(setError(e));
      throw Error(e);
    }
  };
};

const getGameCards = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(addPowerCards([]));
    const url = `http://game.bons.me/api/players/${id}/cards`;
    try {
      const response = await axios.get(url);
      dispatch(addPowerCards(response.data));
    } catch (e) {
      dispatch(setError(e));
      throw Error(e);
    }
  };
};

export { startGame, getGamePlayer, getGameMonster, getGameCards };
