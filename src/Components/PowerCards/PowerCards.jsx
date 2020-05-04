import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setPowerCardSelected } from '../../store/actions/gameActions';

import Loading from '../Loading/Loading';

import { PowerCardsWrapper, PowerCard, PowerImage, PowerText, SelectedCardWrapper } from './styles';

export default function PowerCards() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const storePowerCards = useSelector((state) => state.powerCards);
  const storeSelectedCard = useSelector((state) => state.powerCardSelected);

  const powerCardsHandler = (obj) => {
    dispatch(setPowerCardSelected(obj));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {storeSelectedCard.effect ? (
            <SelectedCardWrapper>
              <PowerText>
                You selected: {storeSelectedCard.effect} - Value: {storeSelectedCard.value}
              </PowerText>
            </SelectedCardWrapper>
          ) : null}
          <PowerCardsWrapper>
            {storePowerCards.map((item) => {
              return (
                <PowerCard
                  key={item.id}
                  onClick={() => {
                    powerCardsHandler({ effect: item.effect, value: item.value });
                  }}
                >
                  <PowerImage src="https://us.123rf.com/450wm/stringerphotography/stringerphotography1509/stringerphotography150914941/45611228-un-icono-amarillo-aislado-en-un-fondo-gris-rayo.jpg?ver=6" />
                  <PowerText>{item.effect}</PowerText>
                  <PowerText>Value: {item.value}</PowerText>
                </PowerCard>
              );
            })}
          </PowerCardsWrapper>
        </>
      )}
    </>
  );
}
