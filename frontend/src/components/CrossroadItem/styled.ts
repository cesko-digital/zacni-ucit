import styled from 'styled-components';

import Button from '@components/Button/Button';
import { mediaQueriesUp } from 'src/common/mediaQueries';

export const Item = styled.li`
  max-width: 250px;
  width: 50%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQueriesUp('sm')`
    max-width: 30%;
    margin: 1.6%;
  `}
`;

export const Link = styled(Button)`
  width: 100%;
  padding: 0 16px 16px;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  ${mediaQueriesUp('sm')`
    padding: 30px 0;
    background: white;
    box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    border: 1px solid #dbdbdb;
    transition: background 300ms ease-in-out, box-shadow 300ms ease-in-out, transform 300ms ease-in-out;

    &:hover,
    &:focus {
      background: rgba(127, 80, 255, 0.05);
      transform: translateY(-2px);
      box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.1);
    }
  `}
`;

export const Content = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: ${({ size }) => (size === 'sm' ? '60px' : '110px')};
  height: ${({ size }) => (size === 'sm' ? '60px' : '100px')};
  margin-bottom: 18px;
`;

export const TextLink = styled.span`
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: center;
  border: 2px solid #0c0807;
  border-radius: 28px;
  text-align: center;

  ${mediaQueriesUp('sm')`
    border: none;
    padding: 0;
    background: none;
    height: auto;
  `}
`;
