import styled from 'styled-components';
import { mediaQueriesUp } from 'src/common/mediaQueries';
import { theme } from 'src/common/theme';

export const MenuTag = styled.menu<{ listOpened: boolean }>`
  ${({ listOpened }) => (!listOpened ? 'display: none;' : null)};
  width: 80%;
  background: white;
  border-bottom-left-radius: 60px;
  position: absolute;
  right: 0;
  margin-top: 0;
  z-index: 10;
  filter: drop-shadow(0 0 800vh rgb(0, 0, 0));

  ${mediaQueriesUp('md')`
    width: 30%;
  `}
`;

export const ListMenu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Item = styled.li<{ greenBgr?: boolean }>`
  text-decoration: none;
  color: white;
  background: ${({ greenBgr }) => (greenBgr ? theme.color.green : 'none')};
  margin: 1rem 0;
  padding: 0.5rem;
`;

export const MenuLink = styled.a<{ lightLink?: boolean }>`
  text-decoration: none;
  font-weight: ${({ lightLink }) => (lightLink ? '400' : '700')};
  color: ${({ theme }) => theme.color.secondary};
  cursor: pointer;

  & svg {
    margin-right: 0.5rem;
  }
`;

export const LinkLight = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.secondary};
  cursor: pointer;
`;
