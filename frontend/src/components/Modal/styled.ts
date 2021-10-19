import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding: 10px;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  background: white;
  max-width: 600px;
  border-radius: 4px;
  border: none;
  padding: 20px 30px;

  ${mediaQueriesUp('sm')`
    padding: 30px 40px;
  `}
`;

export const CloseButtonWrapper = styled.button`
  appearance: none;
  border: none;
  background: none;
  padding: 20px 15px;
  position: absolute;
  top: 0;
  right: 0;

  ${mediaQueriesUp('sm')`
    padding: 20px;
  `}
`;

export const Title = styled.strong`
  display: block;
  font-size: 1.125rem;
  margin-bottom: 15px;
`;

export const InnerContent = styled.div`
  margin: 0 auto;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
`;
