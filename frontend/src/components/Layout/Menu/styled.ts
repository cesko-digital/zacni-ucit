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

  ${mediaQueriesUp('md')`
    width: 30%;
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
