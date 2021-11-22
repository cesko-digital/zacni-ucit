import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 24px 32px;
  background: #e0d5ff;
  border-top: 3px solid #7f50ff;
`;

export const Title = styled.strong`
  display: flex;

  ${mediaQueriesUp('md')`
    display: inline;
  `}
`;

export const Paragraph = styled.p`
  display: block;
  margin: 0 0 8px;
  font-size: 14px;
`;

export const Content = styled.div`
  margin-bottom: 16px;

  ${mediaQueriesUp('md')`
    margin: 0 110px 0 0;
  `}
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;

  ${mediaQueriesUp('md')`
    display: flex;
    align-items: center;
  `}
`;

export const ButtonWrapper = styled.div`
  flex-shrink: 0;
`;

export const CloseButton = styled.button`
  padding: 14px;
  appearance: none;
  border: none;
  background: #7f50ff;
  position: absolute;
  top: -50px;
  border-radius: 50%;
  right: -10px;

  svg {
    width: 14px;
    height: 14px;

    path {
      fill: white;
    }
  }
`;
