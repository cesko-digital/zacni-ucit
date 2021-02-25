import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Logo from '../components/Logo.component';
import MaxWidth from '../components/MaxWidth.component';
import Homepage from './Homepage/Homepage';
import Footer from './footer/Footer';

type LayoutProps = {
  children: ReactNode;
};

const BlackPage = styled.div `
  height: 100px;
  width: 100%;
  background-color: white;
`

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MaxWidth>
        <Logo margin="10px" width={200} />
        <Navbar />
        {children}
        <Homepage />
        <BlackPage/>
        <Footer />
      </MaxWidth>
    </>
  );
};
export default Layout;
