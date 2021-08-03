import type { FC } from 'react';
import React from 'react';

import { HintText } from './styled';

import InfoIcon from '@icons/info.svg';

type Props = { text: string };

export const Hint: FC<Props> = ({ text }) => (
  <>
    <InfoIcon height={15} width={15} />
    <HintText>{text}</HintText>
  </>
);
