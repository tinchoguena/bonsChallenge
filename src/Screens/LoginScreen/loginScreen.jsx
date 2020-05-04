import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  LoginWrapper,
  LoginDiv,
  CenteredText,
  TextInput,
  PlayButton,
  ErrorMessage,
  TotalWrapper,
  NameButton,
} from './styles';

import { startGame } from '../../store/utils/services';

const LoginScreen = ({ goGameScreen }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState({});
  const [showPlay, setShowPlay] = useState(false);
  const [error, setError] = useState('');

  const setNewGameData = (params) => {
    dispatch(startGame(params));
    setShowPlay(true);
  };

  const handleUsernameChange = (e) => {
    setError('');
    setUsername({
      name: e.target.value,
    });
  };

  return (
    <TotalWrapper>
      <LoginWrapper>
        <LoginDiv>
          <h1>Welcome to Bons Game</h1>
          <CenteredText>
            <p>What's your name?</p>
          </CenteredText>
          <label>
            <TextInput
              type="text"
              placeholder="NAME"
              onChange={(e) => {
                handleUsernameChange(e);
              }}
            />

            {showPlay ? (
              <Link to="/game">
                <PlayButton>Lets Play!</PlayButton>
              </Link>
            ) : (
              <NameButton
                onClick={() => {
                  username.name ? setNewGameData(username) : setError('Enter your name to play!');
                }}
              >
                Enter Name
              </NameButton>
            )}
          </label>
          {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        </LoginDiv>
      </LoginWrapper>
    </TotalWrapper>
  );
};

export default LoginScreen;
