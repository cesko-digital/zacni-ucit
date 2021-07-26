import type { ButtonProps } from '@material-ui/core';
import { Button as MaterialButton } from '@material-ui/core';
import React from 'react';
import type { FC } from 'react';

import Link from '@components/Link/Link';

const Button: FC<ButtonProps> = ({ ...props }) => (
  <MaterialButton component={(props.href ? Link : undefined) as any} href={props.href} {...props} />
);

export default Button;
