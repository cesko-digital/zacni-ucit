import React, { FC, ReactNode } from 'react';
import { connect } from 'react-redux';

// import { AppState } from '../../store';
import * as routes from '../../routes';

import { Wrapper, Header, HeaderSection, HeaderLink } from './styled';

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
      <Header>
        <HeaderSection>
          <HeaderLink href={routes.PRODUCT_LIST}>All Products</HeaderLink>
        </HeaderSection>
        <HeaderSection>
          <HeaderLink href={routes.ACCOUNT}>My Cart</HeaderLink>|
          {isAuthenticated ? (
            <>
              <HeaderLink href={routes.ACCOUNT}>My Account</HeaderLink>|
              <HeaderLink href={routes.LOGOUT}>Logout</HeaderLink>
            </>
          ) : (
            <>
              <HeaderLink href={routes.LOGIN}>Log In</HeaderLink> |
              <HeaderLink href={routes.SIGN_UP}>Sign Up</HeaderLink>
            </>
          )}
        </HeaderSection>
      </Header>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   isAuthenticated: Boolean(state.teacher),
// });

// export default connect(mapStateToProps)(Layout);
export default Layout;
