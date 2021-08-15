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
  padding: 32px 0;
  position: relative;

  ${mediaQueriesUp('sm')`
    padding: 80px 0;
  `}

  ${({ withOffset }) =>
    withOffset
      ? mediaQueriesUp('md')`
        padding: 80px 0 80px 60px;
      `
      : mediaQueriesUp('md')`
        padding: 80px 0;
  `}

  ${({ withBackground }) =>
    withBackground
      ? `
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
        
      `
      : ''}
`;

export const SectionPart = styled.div`
  margin-bottom: 10px;

  &:last-child {
    margin: 0;
  }

  ${mediaQueriesUp('md')`
    margin-bottom: 50px;
  `}
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

export const Uppercase = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 5%;
  font-size: 0.8125rem;
`;

export const Number = styled.span`
  color: #7f50ff;
  margin-right: 8px;

  ${mediaQueriesUp('md')`
    color: rgba(127, 80, 255, 0.6);
    margin: 0;
    position: absolute;
    top: -15px;
    left: -60px;
    font-size: 4rem;
    z-index: -1;
  `}
`;

export const TitleText = styled.span`
  display: block;
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
