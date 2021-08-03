import type { FC } from 'react';
import React from 'react';

import Button from '@components/Button/Button';
import { routes } from '@routes';

const HomePage: FC = () => (
  <div>
    <h1>HomePage</h1>
    <Button href={routes.configurator}>Průvodce</Button>
  </div>
);

export default HomePage;
