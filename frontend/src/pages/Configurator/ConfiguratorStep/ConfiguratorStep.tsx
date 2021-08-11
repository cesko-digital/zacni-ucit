import React from 'react';
import type { FC } from 'react';

import { Title } from './styled';
import Button from '@components/Button/Button';
import Meta from '@components/Meta/Meta';
import StyleWrapper from '@components/StyledWrapper';

import ChevronIcon from '@icons/chevron-right.svg';

type Props = {
  title: string;
  isContinueDisabled?: boolean;
  onNextStep: () => void;
};

const ConfiguratorStep: FC<Props> = ({ children, title, isContinueDisabled, onNextStep }) => (
  <div>
    <Meta title={title} />
    <Title>{title}</Title>
    {children}
    <StyleWrapper padding="0 0 5rem 0">
      <Button
        disabled={isContinueDisabled}
        endIcon={<ChevronIcon />}
        type="button"
        onClick={() => onNextStep()}
      >
        Pokračovat
      </Button>
    </StyleWrapper>
  </div>
);

export default ConfiguratorStep;
