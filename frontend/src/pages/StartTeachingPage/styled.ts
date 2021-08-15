import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

import Button from '@components/Button/Button';

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 8px;

  ${mediaQueriesUp('sm')`
    width: 100px;
    height: 100px;
    margin: 10px 0 0 30px;
  `}
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;

  ${mediaQueriesUp('sm')`
    flex-direction: row-reverse;
    margin: 20px 0 60px;
  `}
`;

export const MainTitle = styled.h1`
  margin: 0;
  line-height: 1.2;

  ${mediaQueriesUp('sm')`
    font-size: 3rem;
    text-align: left;
    margin-bottom: 10px;
  `}

  ${mediaQueriesUp('md')`
    font-size: 4rem;
  `}
`;

export const Subtitle = styled.strong`
  margin: 0;
  font-size: 1.5rem;
  color: #4b4848;
  line-height: 1.2;
  margin-top: 5px;
  display: block;
`;

export const Paragraph = styled.p``;

export const SectionsNav = styled.ol`
  counter-reset: item;
  list-style-type: none;
  padding: 0;

  ${mediaQueriesUp('sm')`
    padding: 10px 0;
  `}
`;

export const ListItem = styled.li`
  font-weight: bold;
  display: flex;
  align-items: baseline;
  margin-bottom: 16px;

  ${mediaQueriesUp('sm')`
    border-bottom: 1px solid #e4e4e4;
    padding: 20px 0;
    margin: 0;

    &:last-child {
      border: none;
    }
  `}

  :before {
    content: counter(item) '  ';
    counter-increment: item;
    color: #7f50ff;
    text-decoration: none;
    display: inline-block;
    margin-right: 8px;
  }
`;

export const ScrollLink = styled.a`
  text-decoration: underline;
  color: #0c0807;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-grow: 1;

  ${mediaQueriesUp('sm')`
    text-decoration: none;
  `}
`;

export const IconWrapper = styled.span`
  display: block;
  pointer-events: none;
  width: 24px;
  height: 24px;
  transform: translateY(-3px);
  flex-shrink: 0;
  margin-left: 10px;

  svg {
    fill: #7f50ff;
  }
`;

export const Recommendation = styled.p`
  font-size: 0.75rem;
  margin: 0 0 16px;
`;

export const SectionsWrapper = styled.div`
  ${mediaQueriesUp('sm')`
    padding: 40px 0 0;
  `}
`;

export const Section = styled.section`
  padding: 24px 0 40px;

  ${mediaQueriesUp('sm')`
    padding: 80px 0;
  `}

  ${mediaQueriesUp('md')`
    padding: 80px 0 80px 60px;
  `}

  :nth-child(odd) {
    padding: 24px 2.5rem 40px;
    margin: 0 -2.5rem;
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
      padding: 80px 0 80px 60px;
    `}
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  display: flex;
  position: relative;
  margin: 0 0 24px;
`;

export const TitleText = styled.span`
  display: block;
`;

export const Number = styled.span`
  color: #7f50ff;
  margin-right: 8px;

  ${mediaQueriesUp('md')`
    color: rgba(127, 80, 255, 0.6);
    margin: 0;
    position: absolute;
    top: -30px;
    left: -90px;
    font-size: 6rem;
    z-index: -1;
  `}
`;

export const ButtonWrapper = styled.div`
  padding-top: 24px;

  ${mediaQueriesUp('md')`
    padding: 10px;
  `}
`;

export const ToTopButton = styled(Button)`
  ${mediaQueriesUp('md')`
    border: none;
    box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.1);
    padding: 20px 30px;
  `}
`;

export const ChevronWrapper = styled.span`
  transform: rotate(270deg);
  display: block;
`;
