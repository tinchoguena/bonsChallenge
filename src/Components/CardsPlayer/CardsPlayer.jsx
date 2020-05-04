import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getGamePlayer, getGameMonster } from '../../store/utils/services';

import {
  PlayersCards,
  SheildCard,
  PlayerWrapper,
  CardImage,
  CardTitle,
  Power,
  CardTitleWrapper,
  Shield,
} from './styles';

export default function CardsPlayer() {
  const gameMonster = useSelector((state) => state.monster);
  const gamePlayer = useSelector((state) => state.player);
  const playerHp = useSelector((state) => state.playerHp);
  const monsterHp = useSelector((state) => state.monsterHp);
  const playerShield = useSelector((state) => state.playerShield);
  const monsterShield = useSelector((state) => state.monster.shield);

  return (
    <>
      <PlayerWrapper>
        <PlayersCards>
          <CardImage src={gameMonster.image} />
          <CardTitleWrapper>
            <CardTitle>{gameMonster.name}</CardTitle>
            <Power>
              HP: {monsterHp}/{gameMonster.maxHp}
            </Power>
          </CardTitleWrapper>
        </PlayersCards>
        <SheildCard>
          <Shield>Shield: {monsterShield}</Shield>
        </SheildCard>
      </PlayerWrapper>
      <PlayerWrapper>
        <PlayersCards>
          <CardImage src={gameMonster.image} />
          <CardTitleWrapper>
            <CardTitle>{gamePlayer.name}</CardTitle>
            <Power>
              HP: {playerHp}/{gamePlayer.maxHp}
            </Power>
          </CardTitleWrapper>
        </PlayersCards>
        <SheildCard>
          <Shield>Shield: {playerShield}</Shield>
        </SheildCard>
      </PlayerWrapper>
    </>
  );
}
