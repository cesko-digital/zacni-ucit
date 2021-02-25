import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Logo from '../components/Logo.component';
import MaxWidth from '../components/MaxWidth.component';
import Homepage from './Homepage/Homepage';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MaxWidth>
        <Logo margin="10px" width={200} />
        <Navbar />
        {children}
        <Homepage />
      </MaxWidth>
    </>
  );
};
export default Layout;
