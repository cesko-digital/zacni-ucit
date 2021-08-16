import styled from 'styled-components';
import { mediaQueriesUp } from 'src/common/mediaQueries';
import { theme } from 'src/common/theme';

export const MenuTag = styled.div<{ listOpened: boolean }>`
  ${({ listOpened }) => (!listOpened ? 'display: none;' : null)};
  width: 100%;
  background: white;
  position: fixed;
  right: 0;
  top: 70px;
  margin-top: 0;
  z-index: 10;
  padding: 0 30px;
  max-height: calc(100vh - 70px);
  overflow-y: auto;

  ${mediaQueriesUp('md')`
    width: 30%;
    border-bottom-left-radius: 60px;
  `}
`;

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: block;
  backdrop-filter: blur(4px);
  z-index: 5;
`;

export const ListMenu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Item = styled.li<{ greenBgr?: boolean }>`
  text-decoration: none;
  color: #0c0807;
  background: ${({ greenBgr }) => (greenBgr ? theme.color.green : 'none')};
  margin: 1rem 0;
  padding: 0.5rem;
  border-radius: 3px;

  a {
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  a.light {
    font-weight: normal;
  }
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

export const IconWrapper = styled.span`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  display: inline-block;
`;
