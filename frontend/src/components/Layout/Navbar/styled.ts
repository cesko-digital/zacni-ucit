import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.nav`
  font-size: 18px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  padding: 0.5rem;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }
`;
export const Logo = styled.a`
  text-decoration: none;
  display: inline-block;
  color: ${({ theme }) => theme.color.secondary};
  font-size: 1.7rem;
  margin-top: 10px;
  font-weight: bold;
  margin-left: 20px;
  padding-bottom: 10px;
`;

export const Burger = styled.img<{ listOpened: boolean }>`
  position: absolute;
  top: 22px;
  right: 20px;
  cursor: pointer;
  width: 2rem;
  color: ${({ theme }) => theme.color.secondary};
  @media (min-width: 768px) {
    display: none;
  }
`;

export const List = styled.ul<{ listOpened: boolean }>`
  ${({ listOpened }) => (!listOpened ? 'display: none;' : null)}
  list-style-type: none;
  @media (min-width: 768px) {
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
export const Item = styled.li`
  text-decoration: none;
  color: white;
  text-align: center;
  margin: 15px auto;
  @media (min-width: 768px) {
    margin: 0;
  }
`;
export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.secondary};
  @media (min-width: 768px) {
    margin-left: 40px;
  }
`;
