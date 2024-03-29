import styled from 'styled-components';

//Abstract background will be changed
// const withBgImageStyle = css`
//   background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(225, 225, 225, 0.3));

//   ${mediaQueries('sm')`
//     background: linear-gradient(
//       0deg,
//       rgba(255, 255, 255, 0.9),
//       rgba(225, 225, 225, 0.3)
//     ),
//     url('/images/abstract1.svg');
//     background-size: contain;
//     background-repeat: no-repeat;
//     width: 100%;
//     height: 100%;
//     );
//   `}
// `;

// export const MainWrap = styled.main<{ homePage: boolean }>`
//   ${({ homePage }) => (homePage ? withBgImageStyle : null)}
// `;

export const MainWrapper = styled.div`
  padding-top: 70px;
`;

export const Wrapper = styled.div`
  padding: 0;
  margin: 0 auto;
`;
