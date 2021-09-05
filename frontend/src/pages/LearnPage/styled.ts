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
  padding: 32px 16px;
  margin: 0 -16px;
  position: relative;

  &:nth-child(even) {
    background: rgba(127, 80, 255, 0.05);

    ${mediaQueriesUp('sm')`
      background: none;
      
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
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0 16px;

  ${mediaQueriesUp('sm')`
    font-size: 2rem;
    margin: 0 0 32px;
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

export const ButtonsWrapper = styled.div`
  ${mediaQueriesUp('sm')`
    display: flex;
    align-items: center;
  `}
`;

export const SignUpButtonWrapper = styled.div`
  margin: 16px 0;

  ${mediaQueriesUp('sm')`
    margin: 32px 16px 32px 0;
  `}
`;

export const Link = styled.a`
  color: inherit;
  font-weight: bold;
`;

export const Event = styled.div`
  padding: 16px 16px 24px;
  margin: 0 -16px;

  &:nth-child(even) {
    background: rgba(127, 80, 255, 0.05);
  }

  ${mediaQueriesUp('md')`
    border-radius: 5px;
    display: flex;
    padding: 20px 32px;
  `}
`;

export const EventDate = styled.span`
  display: block;
  font-weight: ${({ time }) => (time ? '400' : '700')};
  margin-bottom: 16px;
  margin-top: ${({ time }) => (time ? '0' : '16px')};

  ${mediaQueriesUp('md')`
    margin: 0 32px 0 0;
    min-width: 20%;
    font-size: 1.25rem;
  `}

  &.time {
    font-size: 1rem;
  }
`;

export const EventContent = styled.div`
  ${mediaQueriesUp('sm')`
    border-radius: 20px;
  `}
`;

export const EventTitle = styled.strong`
  font-weight: ${({ selfContained }) => (selfContained ? '700' : '400')};
  display: block;
  margin-bottom: ${({ selfContained }) => (selfContained ? '0' : '16px')};
  font-size: ${({ selfContained }) => (selfContained ? '1.25rem' : '1rem')};
`;

export const EventDescription = styled.p`
  font-size: 0.875rem;
  margin: 0;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
  max-width: 76ch;
`;

export const EventDateContainer = styled.div`
  min-width: 20%;

  ${mediaQueriesUp('sm')`
    display:flex;
    flex-direction: column;
  `}
`;
