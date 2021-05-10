import React, { FC, ReactNode, useState } from 'react';
// import { connect } from 'react-redux';

// import { AppState } from '../../store';
import * as routes from '../../routes';
import menu from '../../constants/menu';

import {
  Wrapper,
  Header,
  HeaderSection,
  HeaderLink,
  Burger,
  Logo,
} from './styled';
import { Navbar } from './Navbar';

// type Props = ReturnType<typeof mapStateToProps> & {
//   children: ReactNode;
// };
type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const isAuthenticated = true;
  return (
    <>
      {/* <HeaderSection>
          <Logo href={routes.HOMEPAGE}>ZačniUČIT</Logo>
        </HeaderSection>
        <HeaderSection>
          <Burger onClick={() => setNavbarIsOpened(!navbarIsOpened)}>
            &#9776;
          </Burger>
          {menu?.map((item, idx) => (
            <HeaderLink key={idx} href={item.route}>
              {item.label}
            </HeaderLink>
          ))}
          {isAuthenticated ? (
            <>
              <HeaderLink href={routes.ACCOUNT}>Můj účet</HeaderLink>
              <HeaderLink href={routes.LOGOUT}>Odhlásit</HeaderLink>
            </>
          ) : (
            <>
              <HeaderLink href={routes.LOGIN}>Přihlásit</HeaderLink> |
              <HeaderLink href={routes.SIGN_UP}>Registrovat</HeaderLink>
            </>
          )}
        </HeaderSection> */}
      <Navbar />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   isAuthenticated: Boolean(state.teacher),
// });

// export default connect(mapStateToProps)(Layout);
export default Layout;