import styled from 'styled-components';

import { mediaQueries } from '../../../common/mediaQueries';
import { theme } from '../../../common/theme';

export const SelectElement = styled.select`
  width: 100%;
  margin: 0;
  padding: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  font-family: inherit;
  color: ${theme.color.primary};
  border-color: ${theme.color.primary};
  border-width: 2px;
  border-radius: 4px;
  outline-color: transparent;
  font-size: ${theme.fontSize.medium};

  & option {
    color: ${theme.color.secondary};
    line-height: 2;
    background: transparent;
    font-family: inherit;

    &:checked {
      color: ${theme.color.primary};
      font-weight: bold;
    }
    &:focus {
      background: transparent;
    }
  }

  ${mediaQueries('md')`
      width: 100%;
  `}
`;
