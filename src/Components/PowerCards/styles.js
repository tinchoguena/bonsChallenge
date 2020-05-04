import styled from 'styled-components';

const PowerCardsWrapper = styled.div`
  display: flex;
  max-width: 100%;
  height: 40%;
  margin: 30px;
  justify-content: space-around;
`;

const PowerCard = styled.div`
  display: flex;
  height: 90%;
  width: 25%;
  background-color: gray;
  margin-top: 10px;
  border-radius: 8px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const PowerImage = styled.img`
  height: 40%;
  width: 100%;
  background-color: gray;
`;

const PowerText = styled.p`
  font-size: 16px;
  color: black;
`;

const SelectedCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  border: 1px solid black;
  border-radius: 8px;
  align-items: center;
  justify content: center;
  height: 40px;
  margin-left: 50px;
`;

export { PowerCard, PowerCardsWrapper, PowerImage, PowerText, SelectedCardWrapper };
