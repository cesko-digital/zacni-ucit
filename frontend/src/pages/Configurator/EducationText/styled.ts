import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const MainParagraph = styled.p`
  font-size: 1rem;

  ${mediaQueriesUp('sm')`
    font-size: 1.25rem;
    margin-bottom: 30px;
  `}

  strong {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const Paragraph = styled.p`
  font-size: 12px;

  a {
    font-size: inherit;
  }

  ${mediaQueriesUp('sm')`
    font-size: 1rem;
  `}
`;
