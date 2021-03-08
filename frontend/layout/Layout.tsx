import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Logo from '../components/Logo.component';
import MaxWidth from '../components/MaxWidth.component';
import Footer from './Footer';
import Router from 'next/dist/next-server/lib/router/router';


type LayoutProps = {
  children: ReactNode
};


const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
        <MaxWidth>
          <Logo margin="10px" width={200} />
          <Navbar />
          {children}
        </MaxWidth>
        <Footer />
    </>
  );
};
export default Layout;
