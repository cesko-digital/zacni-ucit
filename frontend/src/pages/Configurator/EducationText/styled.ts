import styled from 'styled-components';

export const MainParagraph = styled.p`
  font-size: 16px;

  strong {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const Paragraph = styled.p`
  font-size: 12px;

  a {
    font-size: inherit;
  }
`;
