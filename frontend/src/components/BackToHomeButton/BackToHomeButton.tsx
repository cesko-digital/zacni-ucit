import React from 'react';

import { BackButtonWrapper } from './styled';
import Button from '@components/Button/Button';
import { routes } from '@routes';

import ArrowIcon from '@icons/arrow.svg';

interface Props {
  href?: string;
  children?: string;
}

const BackToHomeButton: React.FC<Props> = ({ href, children }) => (
  <BackButtonWrapper>
    <Button
      buttonStyle="button"
      href={href ?? routes.homepage}
      startIcon={<ArrowIcon />}
      variant="secondary"
    >
      {children ?? 'Zpátky domů'}
    </Button>
  </BackButtonWrapper>
);

export default BackToHomeButton;
