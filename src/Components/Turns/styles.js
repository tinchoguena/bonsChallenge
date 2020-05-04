import styled from 'styled-components';

const TurnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
  height: 100%;
  background-color: lightgray;
`;

const Turns = styled.div`
  height: 90%;
  width: 90%;
  background-color: gray;
  margin-top: 10px;
  border-radius: 8px;
  margin-top: 30px;
`;

const TurnsTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
`;

const TurnsPoints = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 40px;
`;

const EndTurn = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 60px;
  border-radius: 8px;
  background-color: lightblue;
  margin: 20px auto;
`;

const TurnsPointsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 70%;
  width: 80%;
  border: 1px solid black;
  margin: 0 auto;
  border-radius: 8px;
`;

export { Turns, TurnsWrapper, TurnsTitle, EndTurn, TurnsPoints, TurnsPointsWrapper };
