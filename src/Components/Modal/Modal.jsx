import React from 'react';
import { Link } from 'react-router-dom';

import { ModalWrapper, ModalP, PlayButton } from './styles';

export default function Modal({ text }) {
  return (
    <ModalWrapper>
      <ModalP>{text}</ModalP>
      <Link to="/">
        <PlayButton>Let's Go Again</PlayButton>
      </Link>
    </ModalWrapper>
  );
}
