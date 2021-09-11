import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

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
    padding: 102px 16px 40px;
    margin: -70px -16px 0px;
    background: linear-gradient(180deg, #FFFFFF 70px, rgba(127, 80, 255, 0.05) 70px);
    position: relative;

    ${mediaQueriesUp('sm')`
      background: none;
      margin: 0;
      padding: 80px 0;
      
      &:after {
        border-radius: 5px;
        content: '';
        position: absolute;
        z-index: -1;
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

export const SectionSubtitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 16px;

  ${mediaQueriesUp('sm')`
    font-size: 1.5rem;
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

export const List = styled.ul`
  padding-left: 25px;
  margin: 16px 0 0;
`;

export const ListItem = styled.li`
  margin-bottom: 5px;

  ${mediaQueriesUp('sm')`
    margin-bottom: 10px;
  `}
`;

export const Source = styled.p`
  color: #858383;
  font-size: 0.75rem;
`;
