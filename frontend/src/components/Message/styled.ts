import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: rgba(0, 191, 194, 0.05);
  border-radius: 4px;
  padding: 10px 18px;
  display: flex;
  align-items: flex-start;

  ${mediaQueriesUp('sm')`
    padding: 20px 30px;
  `}
`;

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: #00bfc2;
  transform: translateY(4px);
  flex-shrink: 0;

  svg {
    display: block;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
`;
