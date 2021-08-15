import React from 'react';

import Button from '@components/Button/Button';
import { BackButtonWrapper } from './styled';

import ArrowIcon from '@icons/arrow.svg';
import { routes } from '@routes';

interface Props {
  href?: string;
  children?: string;
}

const BackToHomeButton: React.FC<Props> = ({ href, children }) => (
  <BackButtonWrapper>
    <Button
      href={href ?? routes.homepage}
      startIcon={<ArrowIcon />}
      variant="secondary"
      buttonStyle="button"
    >
      {children ?? 'Zpátky domů'}
    </Button>
  </BackButtonWrapper>
);

export default BackToHomeButton;
