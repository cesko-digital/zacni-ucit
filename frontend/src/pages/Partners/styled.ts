import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';
import Button from '@components/Button/Button';

export const MainTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 0 0 16px;

  ${mediaQueriesUp('sm')`
  font-size: 3rem;
  text-align: left;
  margin: 0 32px 0 0;
`}

  ${mediaQueriesUp('md')`
  font-size: 4rem;
`}
`;

export const Section = styled.section`
  max-width: 100%;

  padding: 1rem 1rem 2rem 1rem;

  &.bgr {
    background: rgba(127, 80, 255, 0.05);
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
  max-width: 75ch;
`;

export const MainLink = styled(Button)`
  display: inline-block;
  font-weight: 700;
  font-size: 1rem;
  margin: 0 0 8px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.underline {
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

export const Logo = styled.img`
  max-width: 50%;
  height: auto;
`;

export const Img = styled.img`
  max-width: 50%;
  height: auto;
`;

export const Link = styled.a`
  appearance: none;
`;

export const Logowrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  justify-items: stretch;
  align-items: center;
`;
