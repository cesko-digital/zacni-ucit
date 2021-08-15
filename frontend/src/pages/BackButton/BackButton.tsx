import React from 'react';

import { Button, IconWrapper } from './styled';

import ArrowIcon from '@icons/arrow.svg';
import HomeIcon from '@icons/home.svg';

type Props = {
  href: string;
  children: string;
  icon: 'arrow' | 'home';
};

const BackButton: React.FC<Props> = ({ href, icon, children }) => (
  <Button href={href}>
    <IconWrapper type={icon}>{icon === 'arrow' ? <ArrowIcon /> : <HomeIcon />}</IconWrapper>
    {children}
  </Button>
);

export default BackButton;
