import React from 'react';

import ErrorPage from '../ErrorPage';

import errorImage from './404.svg';

const Error404 = () => (
  <ErrorPage
    image={errorImage}
    text="Omlouváme se, ale tady nic není."
    title="Jej, tady nic není"
  />
);

export default Error404;
