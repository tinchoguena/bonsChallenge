import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getGamePlayer, getGameMonster, getGameCards } from '../../store/utils/services';

import { TotalWrapper, CardsPlayerWrapper, PlayButton } from './styles';

import CardsPlayer from '../../Components/CardsPlayer/CardsPlayer';
import PowerCards from '../../Components/PowerCards/PowerCards';
import TurnsComponent from '../../Components/Turns/Turns';
import Modal from '../../Components/Modal/Modal';
import Loading from '../../Components/Loading/Loading';
import { gameData } from '../../store/actions/gameActions';

export default function GameScreen() {
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const storeGameId = useSelector((state) => state.gameData.id);
  const playerId = useSelector((state) => state.player.id);
  const storePlayerHp = useSelector((state) => state.playerHp);
  const storeMonsterHp = useSelector((state) => state.monsterHp);

  const [showPowerCardsButton, setShowPowerCardsButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');

  const turnHandler = () => {
    if (storePlayerHp === 0) {
      setShowModal(true);
      setModalText('You Loose');
    }
    if (storeMonsterHp === 0) {
      setShowModal(true);
      setModalText('You Win');
    }
  };

  const getPlayersData = (id) => {
    dispatch(getGamePlayer(id));
    dispatch(getGameMonster(id));
  };

  const getPlayerCards = (id) => {
    dispatch(getGameCards(id));
    setShowPowerCardsButton(true);
  };

  useEffect(() => {
    getPlayersData(storeGameId);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <TotalWrapper>
          {showModal ? (
            <Modal text={modalText} />
          ) : (
            <>
              <CardsPlayerWrapper>
                <CardsPlayer />
                {showPowerCardsButton ? (
                  <PowerCards />
                ) : (
                  <PlayButton
                    onClick={() => {
                      getPlayerCards(playerId);
                    }}
                  >
                    Load your Power Cards!
                  </PlayButton>
                )}
              </CardsPlayerWrapper>
              <TurnsComponent gameData={gameData} turnHandler={turnHandler} />
            </>
          )}
        </TotalWrapper>
      )}
    </>
  );
}
