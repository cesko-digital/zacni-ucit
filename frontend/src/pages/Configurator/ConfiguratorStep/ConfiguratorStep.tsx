import React from 'react';
import type { FC } from 'react';

import Input from '@components/Input/Input';
import Meta from '@components/Meta/Meta';
import StyleWrapper from '@components/StyledWrapper';
import { H2 } from '@components/Typography';

type Props = {
  title: string;
  isContinueDisabled?: boolean;
  onNextStep: () => void;
};

const ConfiguratorStep: FC<Props> = ({ children, title, isContinueDisabled, onNextStep }) => (
  <div>
    <Meta title={title} />
    <H2>{title}</H2>
    {children}
    <StyleWrapper margin="0 auto" padding="0 0 5rem 0">
      <Input
        disabled={isContinueDisabled}
        padding="1.5rem 2rem"
        type="button"
        value="Pokračovat"
        onClick={() => onNextStep()}
      />
    </StyleWrapper>
  </div>
);

export default ConfiguratorStep;
