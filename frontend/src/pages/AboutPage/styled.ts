import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const TopWrapper = styled.div`
  display: block;

  ${mediaQueriesUp('sm')`
    display: flex;
    align-items: center;
    padding: 0 0 20px;
  `}
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 0 0 16px;

  ${mediaQueriesUp('sm')`
    font-size: 3rem;
    text-align: left;
    margin: 0 32px 0 0;
  `}

  ${mediaQueriesUp('md')`
    font-size: 4rem;
  `}
`;

export const Logo = styled.img`
  margin: 0 auto;
  display: block;

  ${mediaQueriesUp('sm')`
    width: 130px;
    height: 80px;
    margin: 0;
  `}
`;

export const Section = styled.section`
  padding: 102px 0 32px;
  margin-top: -70px;
  position: relative;

  ${mediaQueriesUp('sm')`
    padding: 150px 0;
  `}

  ${({ withOffset }) =>
    withOffset
      ? mediaQueriesUp('md')`
        padding: 150px 0 80px 60px;
      `
      : mediaQueriesUp('md')`
        padding: 150px 0 80px;
  `}

  ${({ withBackground }) =>
    withBackground
      ? `
    padding: 24px 16px 40px;
    margin: 0 -16px;
    background: rgba(127, 80, 255, 0.05);
    position: relative;

    ${mediaQueriesUp('sm')`
      background: none;
      margin: 0;
      padding: 80px 0;
      
      &:after {
        border-radius: 5px;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(127, 80, 255, 0.05);
        z-index: -1;
        transform: rotate(-2deg) scaleX(1.2) translateY(-5px);
      }
    `}

    ${mediaQueriesUp('md')`
      padding: 80px 0;
    `}
        
      `
      : ''}
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0 16px;
  display: flex;
  position: relative;

  ${mediaQueriesUp('sm')`
    font-size: 2rem;
    margin: 0 0 32px;
  `}
`;

export const Image = styled.img`
  width: 100%;
  height: auto;

  ${mediaQueriesUp('sm')`
    margin: 20px 0;
    display: block;
    box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    overflow: hidden;
  `}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem -0.5rem;
`;
