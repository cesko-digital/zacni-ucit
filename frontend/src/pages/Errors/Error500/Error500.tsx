import React from 'react';

import ErrorPage from '../ErrorPage';

import errorImage from './500.svg';

const Error500 = () => (
  <ErrorPage
    image={errorImage}
    text="Omlouváme se, ale na obsahu této stránky pracujeme a ještě není hotová. Zkuste se za námi stavit později."
    title="Pracujeme na tom!"
  />
);

export default Error500;
