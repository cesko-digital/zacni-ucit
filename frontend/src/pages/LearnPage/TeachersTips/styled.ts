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

  ${({ withBackground }) =>
    withBackground
      ? `
    padding: 102px 16px 40px;
    margin: -50px -16px 0px;
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

export const List = styled.ul`
  list-style-type: disc;
  padding-left: 25px;
  margin: 16px 0 0;
`;

export const ListItem = styled.li`
  margin-bottom: 5px;

  ${mediaQueriesUp('sm')`
    margin-bottom: 10px;
  `}
`;
export const Paragraph = styled.p`
  max-width: 75ch;

  ${({ withMarginLeft }) =>
    withMarginLeft
      ? `
    margin-left: 1.5rem;  `
      : ''}
`;

export const ScrollLinkContainer = styled.div`
  display: flex;
`;

export const Number = styled.span`
  color: rgba(127, 80, 255, 0.6);
  font-weight: 700;
  margin-right: 1rem;

  ${mediaQueriesUp('sm')`
 font-size: 1.5rem;
   
    `}
`;

export const Citation = styled.div`
  display: flex;
  margin-left: 0;
  margin-right: auto;
  justify-content: flex-start;

  ${mediaQueriesUp('sm')`
   font-size:1.2rem;
align-items: center;
max-width: 50ch;
    `}

  &:before {
    content: '“';
    color: #ffdc5d;
    font-size: 6em;
    margin-right: 0.5rem;

    ${mediaQueriesUp('sm')`
    font-size: 10em;
    margin-right: 1rem;
    `}
  }
`;
