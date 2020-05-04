import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setPlayerHp, setMonsterHp, setPlayerShield } from '../../store/actions/gameActions';
import { getGameCards } from '../../store/utils/services';

import {
  TurnsWrapper,
  Turns,
  TurnsTitle,
  EndTurn,
  TurnsPoints,
  TurnsPointsWrapper,
} from './styles';

export default function TurnsComponent({ turnHandler }) {
  const dispatch = useDispatch();
  const maxTurns = useSelector((state) => state.gameData.maxTurns);
  const storePlayer = useSelector((state) => state.player);
  const storeMonster = useSelector((state) => state.monster);
  const storeSelectedCard = useSelector((state) => state.powerCardSelected);
  const storePlayerHp = useSelector((state) => state.playerHp);
  const storeMonsterHp = useSelector((state) => state.monsterHp);
  const storePlayerShield = useSelector((state) => state.playerShield);
  const storeMonsterShield = useSelector((state) => state.monsterShield);
  const playerId = useSelector((state) => state.player.id);
  const [currentTurn, setCurrentTurn] = useState(1);
  const [pastTurns, setpastTurns] = useState(0);

  const playerDamageHandler = (damage) => {
    if (storePlayerShield > 0) {
      if (storePlayerShield >= damage) {
        dispatch(setPlayerShield(storePlayerShield - damage));
      } else {
        dispatch(setPlayerShield(storePlayerShield - (damage - (damage - storePlayerShield))));
      }
    } else {
      dispatch(setPlayerHp(storePlayerHp - Math.floor(Math.random() * 3)));
    }
  };

  const endTurnHandler = () => {
    turnHandler();
    switch (storeSelectedCard.effect) {
      case 'HEAL':
        if (storePlayerHp === storePlayer.maxHp) {
          dispatch(setPlayerHp(storePlayerHp));
        } else {
          const healNeeded = storePlayer.maxHp - storePlayerHp;
          if (storeSelectedCard.value <= healNeeded) {
            dispatch(setPlayerHp(storePlayerHp + storeSelectedCard.value));
          } else {
            dispatch(
              setPlayerHp(
                storePlayerHp + (storeSelectedCard.value - (storeSelectedCard.value - healNeeded))
              )
            );
          }
        }
        break;
      case 'DAMAGE':
        if (storeMonsterHp >= storeSelectedCard.value) {
          dispatch(setMonsterHp(storeMonsterHp - storeSelectedCard.value));
        } else {
          dispatch(
            setMonsterHp(
              storeSelectedCard.value -
                (storeMonsterHp - (storeSelectedCard.value - storeMonsterHp))
            )
          );
        }
        break;
      case 'SHIELD':
        dispatch(setPlayerShield(storeSelectedCard.value));
        break;

      default:
        return null;
    }
    playerDamageHandler(Math.floor(Math.random() * 3));
    dispatch(getGameCards(playerId));
    setCurrentTurn(currentTurn + 1);
    setpastTurns(pastTurns + 1);
  };

  return (
    <TurnsWrapper>
      <Turns>
        <TurnsTitle>
          <h1>Turns</h1>
        </TurnsTitle>
        <TurnsPointsWrapper>
          <TurnsPoints>
            <h2>Current</h2>
            <h2>{currentTurn}</h2>
          </TurnsPoints>
          <TurnsPoints>
            <h2>Past</h2>
            <h2>{pastTurns}</h2>
          </TurnsPoints>
          <TurnsPoints>
            <h2>Left</h2>
            <h2>{maxTurns - currentTurn}</h2>
          </TurnsPoints>
        </TurnsPointsWrapper>
        <EndTurn
          onClick={() => {
            endTurnHandler();
          }}
        >
          <p>End Turn</p>
        </EndTurn>
      </Turns>
    </TurnsWrapper>
  );
}
