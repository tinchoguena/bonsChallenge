import styled from 'styled-components';

const ModalWrapper = styled.div`
  display: flex;
  width: 40%;
  height: 40%;
  align-items: center;
  justify-content: center;
  background-color: gray;
  border-radius: 8px;
  margin: 0 auto;
  flex-direction: column;
`;

const ModalP = styled.p`
  font-size: 48px;
  color: black;
`;
const PlayButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 8px;
  background-color: lightblue;
  border: none;
  font-weight: 600;
  color: white;
  outline: none;
  box-shadow: 0px 4px 20px 0px transparent;
  margin-top: 10px;
`;

export { ModalWrapper, ModalP, PlayButton };
