import React from 'react';
import Loader from 'react-loader-spinner';

import { LoaderWrapper } from './styles';

export default function Loading() {
  return (
    <LoaderWrapper>
      <Loader type="Circles" color="black" height={100} width={100} />
    </LoaderWrapper>
  );
}
