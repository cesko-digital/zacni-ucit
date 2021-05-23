import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

const withBgImageStyle = css`
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.9),
      rgba(225, 225, 225, 0.3)
    ),
    url('/images/home-background.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 40vh;
`;
export const MainWrap = styled.main<{ homePage: boolean }>`
  ${({ homePage }) => (homePage ? withBgImageStyle : null)}
`;
export const Wrap = styled.div`
  padding: 0 2.5rem;
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
