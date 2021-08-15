import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Section = styled.section`
  padding: 32px 0;
  border-top: 1px solid #ecebeb;
  border-bottom: 1px solid #ecebeb;

  ${mediaQueriesUp('sm')`
    box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.05);
    border: none;
    max-width: 860px;
    margin: 0 auto;
    border-radius: 5px;
    padding: 50px 0;
    margin: 50px auto;
  `}
`;

export const Title = styled.h2`
  color: #4b4848;
  font-size: 1.5rem;
  margin: 0;
  margin-right: 20px;

  ${mediaQueriesUp('sm')`
    font-size: 2.5rem;
    color: #242120;
  `}
`;

export const Regular = styled.span`
  font-weight: normal;
  display: block;
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

export const Logo = styled.img`
  ${mediaQueriesUp('sm')`
    width: 100px;
    height: 100px;
  `}
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 16px;

  ${mediaQueriesUp('sm')`
    margin: 0 30px 0 0;
  `}
`;

export const Buttons = styled.div`
  ${mediaQueriesUp('sm')`
    display: flex;
  `}
`;
