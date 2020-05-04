import styled from 'styled-components';

const CardsPlayerWrapper = styled.div`
  display: flex;
  width: 75%;
  height: 100%;
  background-color: lightgray;
  flex-direction: column;
  justify-content: space-between;
`;

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  height: 20%;
  margin: 30px;
  justify-content: space-around;
`;

const PlayersCards = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  background-color: gray;
  border-radius: 8px;
  flex-direction: row;
`;

const CardTitleWrapper = styled.div`
  display: flex;
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const CardImage = styled.img`
  height: 100%;
  width: 35%;
  background-color: gray;
  display: inline-block;
`;

const CardTitle = styled.h2`
  max-width: 40%;
`;

const Power = styled.p`
  max-width: 40%;
`;

const SheildCard = styled.div`
  display: flex;
  height: 100%;
  width: 30%;
  background-color: gray;
  margin-left: 30px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const Shield = styled.p`
  font-size: 16px;
  color: black;
`;

export {
  CardsPlayerWrapper,
  PlayersCards,
  SheildCard,
  PlayerWrapper,
  CardImage,
  CardTitle,
  Power,
  CardTitleWrapper,
  Shield,
};
