import styled from 'styled-components';
import { mediaQueries, mediaQueriesUp } from 'src/common/mediaQueries';
import { theme } from 'src/common/theme';

export const Wrapper = styled.nav`
  font-size: 18px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  padding-bottom: 0;
  height: 70px;
  align-items: center;
  position: relative;
  z-index: 20;
`;
export const Logo = styled.span`
  text-decoration: none;
  display: inline-block;
  color: ${({ theme }) => theme.color.secondary};
  font-size: 1.7rem;
  margin-top: 10px;
  font-weight: bold;
  margin-left: 20px;
  padding-bottom: 10px;
  cursor: pointer;
`;

export const Burger = styled.button`
  position: absolute;
  top: 22px;
  right: 20px;
  cursor: pointer;
  width: 7rem;
  color: ${({ theme }) => theme.color.primary};
  border: 1px solid #ecebeb;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1rem;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  margin-right: 10rem;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Item = styled.li`
  text-decoration: none;
  color: white;
  text-align: center;
  margin: 15px auto;
  ${mediaQueriesUp('md')`
    margin: 0;
  `}
`;

export const NavLink = styled.a<{ color?: string }>`
  text-decoration: none;
  color: ${({ theme }) => theme.color.secondary};
  font-weight: 700;
  font-size: ${theme.fontSize.medium};
  cursor: pointer;
  margin-left: 40px;
  display: none;

  ${mediaQueriesUp('lg')`
    display:inline-block;
  `};

  &.muzu-ucit {
    color: ${({ theme }) => theme.color.primary};
    display: inline-block;
    border-radius: 40px;
    border: 2px solid #7f50ff;
    padding: 0.5rem 1rem;

    ${mediaQueriesUp('lg')`
      padding: 0;
      border: none;
    `}

    ${mediaQueries('sm')`
    display:none;
    `};
  }

  &.zkus-ucit {
    color: #ff2f5b;
  }

  &.zauc-se {
    color: #ffb60b;
  }
`;
