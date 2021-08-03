import ReactLink from 'next/link';
import type { FC } from 'react';
import React from 'react';

interface ILinkProps {
  href: string;
  children: string | JSX.Element;
  title?: string;
  className?: string;
}

const Link: FC<ILinkProps> = React.forwardRef(({ href, title, children }, ref: any) => (
  <ReactLink href={href} prefetch={false}>
    <a ref={ref} style={{ color: 'inherit', fontWeight: 'bold' }} title={title}>
      {children}
    </a>
  </ReactLink>
));

export default Link;
