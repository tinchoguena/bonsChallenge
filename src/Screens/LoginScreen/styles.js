import styled from 'styled-components';

const TotalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: lightgray;
`;

const LoginWrapper = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  background-color: ligthgray;
  border-radius: 10px;
`;
const LoginDiv = styled.div`
  width: 100%;
  height: 100%;
  vertical-align: middle;
`;
const CenteredText = styled.div`
  margin: auto;
`;

const TextInput = styled.input`
  width: 100%;
  height: 8%;
  border-radius: 8px;
  background-color: gray;
  border: none;
  font-weight: 600;
  color: white;
  padding: 0px 16px;
  outline: none;
  box-shadow: 0px 4px 20px 0px transparent;
`;
const PlayButton = styled.button`
  width: 100%;
  height: 8%;
  border-radius: 8px;
  background-color: lightblue;
  border: none;
  font-weight: 600;
  color: white;
  margin: 0px 16px;
  outline: none;
  box-shadow: 0px 4px 20px 0px transparent;
  margin-top: 10px;
`;
const NameButton = styled.button`
  width: 100%;
  height: 8%;
  border-radius: 8px;
  background-color: lightgreen;
  border: none;
  font-weight: 600;
  color: white;
  margin: 0px 16px;
  outline: none;
  box-shadow: 0px 4px 20px 0px transparent;
  margin-top: 10px;
`;
const ErrorMessage = styled.p`
  width: 100%;
  color: red;
  font-size: 14px;
`;

export {
  LoginWrapper,
  LoginDiv,
  CenteredText,
  TextInput,
  PlayButton,
  ErrorMessage,
  TotalWrapper,
  NameButton,
};
