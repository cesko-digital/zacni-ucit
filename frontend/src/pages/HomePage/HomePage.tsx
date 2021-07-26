import type { FC } from 'react';
import React from 'react';

import Button from '@components/Button/Button';
import { routes } from '@routes';

const HomePage: FC = () => <Button href={routes.configurator}>Průvodce</Button>;

export default HomePage;
