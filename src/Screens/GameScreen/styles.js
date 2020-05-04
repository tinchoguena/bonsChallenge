import styled from 'styled-components';

const TotalWrapper = styled.div`
  display: flex;
  justify-content: flex-star;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: lightgray;
`;

const CardsPlayerWrapper = styled.div`
  display: flex;
  width: 75%;
  height: 100%;
  background-color: lightgray;
  flex-direction: column;
  justify-content: space-between;
`;
const PlayButton = styled.button`
  width: 60%;
  height: 8%;
  border-radius: 8px;
  background-color: lightblue;
  border: none;
  font-weight: 600;
  color: white;
  margin: 70px auto;
  outline: none;
  box-shadow: 0px 4px 20px 0px transparent;
`;

export { TotalWrapper, CardsPlayerWrapper, PlayButton };
