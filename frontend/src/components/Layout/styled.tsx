import styled, { css } from 'styled-components';

const withBgImageStyle = css`
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(225, 225, 225, 0.3)),
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
