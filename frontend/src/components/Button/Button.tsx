import type { ButtonProps } from '@material-ui/core';
import React from 'react';

import { Link, Button, IconWrapper } from './styled';

const ButtonComponent: React.FC<ButtonProps> = props =>
  (props.href ? (
    <Link {...props}>
      {props.children}
      <IconWrapper>{props.endIcon}</IconWrapper>
    </Link>
  ) : (
    <Button {...props}>
      {props.children}
      <IconWrapper>{props.endIcon}</IconWrapper>
    </Button>
  ));

export default ButtonComponent;
