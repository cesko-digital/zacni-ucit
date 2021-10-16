import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const MainParagraph = styled.p`
  font-size: 1rem;

  strong {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const Paragraph = styled.p`
  font-size: 0.75rem;

  a {
    font-size: inherit;
  }

  ${mediaQueriesUp('sm')`
    font-size: 0.875rem;
  `}
`;
