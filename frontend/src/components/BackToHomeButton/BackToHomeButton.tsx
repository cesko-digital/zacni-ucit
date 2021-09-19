import React from 'react';

import { BackButtonWrapper } from './styled';
import Button from '@components/Button/Button';
import { routes } from '@routes';

import ArrowIcon from '@icons/arrow.svg';

interface Props {
  href?: string;
  children?: string;
  icon?: any;
  visible?: boolean;
}

const BackToHomeButton: React.FC<Props> = ({ href, children, icon, visible }) => (
  <BackButtonWrapper visible={visible ? true : false}>
    <Button
      buttonStyle="button"
      href={href ?? routes.homepage}
      startIcon={icon ?? <ArrowIcon />}
      variant="secondary"
    >
      {children ?? 'Zpátky domů'}
    </Button>
  </BackButtonWrapper>
);

export default BackToHomeButton;
