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
  buttonText?: string;
  additionalText?: JSX.Element;
  withButton?: boolean;
  onNextStep: () => void;
};

const ConfiguratorStep: FC<Props> = ({
  children,
  title,
  buttonText,
  isContinueDisabled,
  additionalText = null,
  withButton = true,
  onNextStep,
}) => (
  <div>
    <Meta title={title} />
    <Title>{title}</Title>
    {children}
    {withButton && (
      <StyleWrapper padding="0 0 1rem 0">
        <Button
          disabled={isContinueDisabled}
          endIcon={<ChevronIcon />}
          type="button"
          onClick={() => onNextStep()}
        >
          {buttonText ?? 'Pokračovat'}
        </Button>
      </StyleWrapper>
    )}
    {additionalText}
  </div>
);

export default ConfiguratorStep;
