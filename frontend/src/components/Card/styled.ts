import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => (theme === 'secondary' ? 'rgba(127, 80, 255, 0.05)' : 'white')};
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 8px 12px;
  margin: 20px 0;

  ${mediaQueriesUp('sm')`
    margin: 0 0 20px;
    box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.05);
    padding: 16px 24px;
  `}
`;

export const BadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: -8px 0 20px;

  ${mediaQueriesUp('sm')`
    margin: -16px 0 10px;
  `}
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  background: #7f50ff;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.625rem;
`;
