import styled from 'styled-components';

import ButtonComponent from '@components/Button/Button';
import { mediaQueriesUp } from 'src/common/mediaQueries';

export const Section = styled.section`
  padding: 0 0 32px;
  position: relative;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ecebeb;

  ${mediaQueriesUp('sm')`
    padding: 40px 0;
    border: none;
  `}
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Image = styled.img``;

export const Button = styled(ButtonComponent)`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  right: ${({ right }) => `${right}px`};
  text-align: ${({ align }) => align};
  max-width: 90px;
`;
