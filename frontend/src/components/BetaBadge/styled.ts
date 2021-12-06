import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #f4f0ff;
  position: static;
  right: 20px;
  top: 78px;
  border-radius: 5px;
  padding: 10px 0;
  z-index: 100;

  ${mediaQueriesUp('md')`
    position: fixed;
  `}
`;

export const Content = styled.div`
  display: flex;
  max-width: 800px;
  padding: 0 16px;
  margin: 0 auto;

  ${mediaQueriesUp('md')`
    padding: 0 20px;
  `}
`;

export const IconWrapper = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 10px;
  transform: translateY(-2px);

  svg {
    fill: #7f50ff;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: 0.875rem;
`;

export const Title = styled.strong`
  display: block;
  font-size: 1rem;
`;
