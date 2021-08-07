import type { ButtonProps } from '@material-ui/core';
import { Button as MaterialButton } from '@material-ui/core';
import React from 'react';

import LinkComponent from '@components/Link/Link';

const Link: React.FC<ButtonProps> = props => (
  <MaterialButton
    component={(props.href ? LinkComponent : undefined) as any}
    href={props.href}
    {...props}
  />
);

export default Link;
