import {
  SET_LOADING,
  ADD_POWER_CARDS,
  SET_TURNS,
  SET_PLAYER_HP,
  SET_MONSTER_HP,
  SET_PLAYER_SHIELD,
  SET_MOSNTER_SHIELD,
  SET_GAME_DATA,
  SET_ERROR,
  SET_PLAYER,
  SET_MONSTER,
  SET_POWER_CARD_SELECTED,
} from '../actions/gameActions';

const initialState = {
  powerCards: [],
  turns: {},
  player: {},
  monster: {},
  playerHp: 0,
  monsterHp: 0,
  playerShield: 0,
  monsterShield: 0,
  loading: false,
  gameData: {},
  error: '',
  powerCardSelected: {},
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAME_DATA:
      return {
        ...state,
        gameData: action.gameData,
        loading: false,
      };
    case ADD_POWER_CARDS:
      return {
        ...state,
        powerCards: action.cards,
        loading: false,
      };
    case SET_TURNS:
      return {
        ...state,
        turns: action.turns,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.bool,
      };
    case SET_PLAYER_HP:
      return {
        ...state,
        playerHp: action.hp,
        loading: false,
      };
    case SET_MONSTER_HP:
      return {
        ...state,
        monsterHp: action.hp,
        loading: false,
      };
    case SET_PLAYER_SHIELD:
      return {
        ...state,
        playerShield: action.shield,
        loading: false,
      };
    case SET_MOSNTER_SHIELD:
      return {
        ...state,
        monsterShield: action.shield,
        loading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case SET_PLAYER:
      return {
        ...state,
        player: action.player,
        loading: false,
      };
    case SET_MONSTER:
      return {
        ...state,
        monster: action.monster,
        loading: false,
      };
    case SET_POWER_CARD_SELECTED:
      return {
        ...state,
        powerCardSelected: action.card,
        loading: false,
      };
    default:
      return state;
  }
};

export default gameReducer;
