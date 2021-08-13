import styled from 'styled-components';
import { mediaQueriesUp } from 'src/common/mediaQueries';

export const Wrapper = styled.nav`
  font-size: 18px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  ${mediaQueriesUp('md')`
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  `}
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
`;

export const Burger = styled.button`
  position: absolute;
  top: 22px;
  right: 20px;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.color.secondary};
  border: none;
  background: transparent;
  ${mediaQueriesUp('md')`
    display: none;
    `};
`;

export const List = styled.ul<{ listOpened: boolean }>`
  ${({ listOpened }) => (!listOpened ? 'display: none;' : null)}
  list-style-type: none;
  ${mediaQueriesUp('md')`
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  `}
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
export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.secondary};
  ${mediaQueriesUp('md')`
    margin-left: 40px;
  `}
`;
