export const SET_LOADING = 'SET_LOADING';
export const SET_GAME_DATA = 'SET_GAME_DATA';
export const ADD_POWER_CARDS = 'ADD_POWER_CARDS';
export const SET_TURNS = 'SET_TURNS';
export const SET_PLAYER_HP = 'SET_PLAYER_HP';
export const SET_MONSTER_HP = 'SET_MONSTER_HP';
export const SET_PLAYER_SHIELD = 'SET_PLAYER_SHIELD';
export const SET_MOSNTER_SHIELD = 'SET_MONSTER_SHIELD';
export const SET_ERROR = 'SET_ERROR';
export const SET_PLAYER = 'SET_PLAYER';
export const SET_MONSTER = 'SET_MONSTER';
export const SET_POWER_CARD_SELECTED = 'SET_POWER_CARD_SELECTED';

export const gameData = (data) => {
  return {
    type: SET_GAME_DATA,
    gameData: data,
  };
};

export const setLoading = (bool) => {
  return {
    type: SET_LOADING,
    bool,
  };
};
export const addPowerCards = (cards) => {
  return {
    type: ADD_POWER_CARDS,
    cards,
  };
};
export const setTurns = (turns) => {
  return {
    type: SET_TURNS,
    turns,
  };
};
export const setPlayerHp = (hp) => {
  return {
    type: SET_PLAYER_HP,
    hp,
  };
};
export const setMonsterHp = (hp) => {
  return {
    type: SET_MONSTER_HP,
    hp,
  };
};
export const setMonsterShield = (shield) => {
  return {
    type: SET_MOSNTER_SHIELD,
    shield,
  };
};
export const setPlayerShield = (shield) => {
  return {
    type: SET_PLAYER_SHIELD,
    shield,
  };
};

export const setError = (error) => {
  return {
    type: SET_ERROR,
    error,
  };
};

export const setPlayer = (player) => {
  return {
    type: SET_PLAYER,
    player,
  };
};

export const setMonster = (monster) => {
  return {
    type: SET_MONSTER,
    monster,
  };
};

export const setPowerCardSelected = (card) => {
  return {
    type: SET_POWER_CARD_SELECTED,
    card,
  };
};
