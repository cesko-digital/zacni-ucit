import ReactLink from 'next/link';
import type { FC } from 'react';
import React from 'react';

import { ALink } from './styled';

interface ILinkProps {
  href: string;
  children: string | JSX.Element;
  title?: string;
  className?: string;
}

const Link: FC<ILinkProps> = React.forwardRef(({ href, title, children }, ref: any) => (
  <ReactLink href={href} prefetch={false}>
    <ALink ref={ref} title={title}>
      {children}
    </ALink>
  </ReactLink>
));

export default Link;
