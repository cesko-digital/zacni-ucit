import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { theme } from '../../common/theme';

export const Wrapper = styled.div`
  padding: 0 3rem;
`;

export const Header = styled.header`
  display: flex;
  border-bottom: 0.1rem solid gainsboro;
  justify-content: space-between;
  padding: 1.5rem 2rem;
`;

export const HeaderSection = styled.div``;

export const Burger = styled.a`
  display: none;
  @media (max-width: 900px) {
    float: right;
    cursor: pointer;
    display: block;
  }
  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;
export const Logo = styled.a`
  margin: 0 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color.secondary};
  text-decoration: none;
`;

export const StyledLink = styled.a`
  margin: 0 1rem;
  cursor: pointer;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const HeaderLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href}>
    <StyledLink>{children}</StyledLink>
  </Link>
);
