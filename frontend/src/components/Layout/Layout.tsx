import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';
import React from 'react';

import { Navbar } from './Navbar/Navbar';
import { Wrap, MainWrap } from './styled';
import Footer from '@components/Layout/Footer/Footer';
import { routes } from '@routes';

type Props = {
  children: ReactNode;
};

const pagesWithoutFooter = [routes.searchResults];

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <MainWrap homePage={router.pathname === '/'}>
      <Navbar />
      <Wrap>{children}</Wrap>
      {!pagesWithoutFooter.includes[router.pathname] && <Footer />}
    </MainWrap>
  );
};

export default Layout;
