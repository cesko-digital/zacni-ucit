import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';
import React from 'react';

import { Navbar } from './Navbar/Navbar';
import { Wrap, MainWrap } from './styled';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <MainWrap homePage={router.pathname === '/'}>
      <Navbar />
      <Wrap>{children}</Wrap>
    </MainWrap>
  );
};

export default Layout;
