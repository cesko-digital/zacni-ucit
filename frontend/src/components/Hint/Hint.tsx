import React from 'react';

import { Button, IconWrapper } from './styled';

import InfoIcon from '@icons/info.svg';

type Props = {
  children: string;
  href?: string;
  onClick?: () => void;
  download?: boolean;
};

const Hint: React.FC<Props> = ({ href, onClick, download, children }) => (
  <Button
    type="button"
    href={href}
    target={href ? '_blank' : undefined}
    download={download}
    onClick={onClick}
  >
    <IconWrapper>
      <InfoIcon />
    </IconWrapper>
    {children}
  </Button>
);

export default Hint;
